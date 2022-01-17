/* Arquivo referente a página home da aplicaçao */
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import "./styles.css";

function Listing() {
  //Para fazer uma requisição
  axios.get(`${BASE_URL}/movies?size=12&page=0`).then(response => {
    console.log(response.data);
  });

  return (
    <>
      <Pagination />
      {/* Aplicando as setas para que a paginação */}

      <div className="container">
        <div className="row">
          {/* Defindo os breakpoints para ajustar
           o compoente da página de modo impor limites para o tamanho da página - 6 colunas do 
           Grid Strap,sendo que o total são 12; 

                    Tabela de breakpoints
                    X-Small	None	     <576px
                    Small	   sm        ≥576px
                    Medium	   md        ≥768px
                    Large	   lg        ≥992px
                    Extra large    xl    ≥1200px
                    Extra extra large  xxl	≥1400px*/}

          <div className="col-sm-6 col-log-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-log-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-log-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-log-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-log-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
