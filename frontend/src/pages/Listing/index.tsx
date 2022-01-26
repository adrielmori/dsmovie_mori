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
    axios
      .get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id=title`)//sort=id: garante que a busca do filme será por Id, na mesma ordem
      .then(response => {
        const data = response.data as MoviePage;
        setPage(data);
      });
  }, [pageNumber]);

  //Redenrizando com os objetos do

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

          {page.content.map((movie) => (
            <div key={movie.id} className="col-sm-6 col-log-4 col-xl-3 mb-3">
              <MovieCard movie={movie} />
            </div>
          ))}
          {/* Analisa filmes de forma individual */}
        </div>
      </div>
    </>
  );
}

export default Listing;
