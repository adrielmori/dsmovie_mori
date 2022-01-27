/* Arquivo referente a página home da aplicaçao */
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import "./styles.css";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";

function Listing() {
  //mantendo o estado no componente
  const [pageNumber, setPageNumber] = useState(0);

  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  //executa somente quando é solicitado
  useEffect(() => {
    //Para fazer uma requisição
    //Tem que passar a difinição Base Url definido no requisitos
    axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)//sort=id: garante que a busca do filme será por ordem de Id;
    //sort=title garante que será em ordem afalbética do titulo;
      .then(response => {
        const data = response.data as MoviePage;
        setPage(data);
      });
  }, [pageNumber]); //chama a função de mudar de página ele executa novamente com o mesmo valor, e ja busca a nova página

  //Redenrizando com os objetos do

  const  handlePageChange = (newPageNumber : number) => {//muda o status da página; Atualiza o useState
    setPageNumber(newPageNumber);
    }

  return (
    <>
      <Pagination page={page} onChange={handlePageChange}/>{/*  */}
      {/* Aplicando as setas para que a paginação */}

      <div className="container">
        <div className="row">
          {page.content.map(movie => (//acessando a lista de filmes, e renderizando items da página
            <div key={movie.id} className="col-sm-6 col-log-4 col-xl-3 mb-3">
              <MovieCard movie={movie} />
            </div>
          )
          )}
          {/* Analisa filmes de forma individual */}
        </div>
      </div>
    </>
  );
}

export default Listing;