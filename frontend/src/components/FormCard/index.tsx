import axios,{ AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Movie } from "types/movie";
import { BASE_URL } from "utils/requests";
import { validateEmail } from "utils/validate";
import "./styles.css";
/* Entrada de comando do usuário para classificar o conteúdo exibido */

type Props = {
  movieId: string;
};

function FormCard({ movieId }: Props) {
  //Para capturar a rota da página do filme escolhido

  const navigate = useNavigate();//redirecionamento de rota

  //buscando filme a partir do Id
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`) //Requisição esecífica do Id informado
      .then(response => {
        setMovie(response.data); //objeto do corpo da resposta
      });
  }, [movieId]);//Arguemento será a dependencia. Para encerrar a requisição

  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {//pegando dados do formulário

    event.preventDefault();//empede que o formulário seja enviado
    const email = (event.target as any).email.value;//acessando input do email
    const score = (event.target as any).score.value;

    if(!validateEmail(email)){
      return;
    }

    //Requisição put para a API
    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: 'PUT',
      url: '/scores',
      data: {
        email: email,
        movieId: movieId,
        score: score
      }
    }

    axios(config).then(response => {
      //console.log(response.data);
      navigate("/"); //listagem
    })

  }

  return (
    <div className="dsmovie-form-container">
      <img
        className="dsmovie-movie-card-image"
        src={movie?.image}
        alt={movie?.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="dsmovie-form" onSubmit={handleSubmit}>
          {" "}
          {/* Comandos do usuário */}
          <div className="form-group dsmovie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="dsmovie-form-btn-container">
            <button type="submit" className="btn btn-primary dsmovie-btn">
              Salvar
            </button>
          </div>
        </form>
        <Link to="/">
          {" "}
          {/* Volta para a página inicial da Listagem */}
          <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
        </Link>
      </div>
    </div>
  );
}

export default FormCard;
