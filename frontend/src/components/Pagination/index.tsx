/* Mecanismo de navegação do tipo paginação na página inicial */
import { ReactComponent as Arrow } from 'assets/img/arrow.svg'
import { MoviePage } from 'types/movie';

type Props ={
  page: MoviePage;
  onChange: Function;
}

function Pagination({ page, onChange } : Props) {
 
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={page.first} onClick={() => onChange(page.number -1)}> 
        {/* Comando para implementação do botão para paginação */}
        {/* Ajustando as páginas */}
         {/* disabled é para habilitar e desabilitar a paginação */}
          <Arrow />
        </button>
        <p>{`${page.number+1} de ${page.totalPages}`}</p>
        <button className="dsmovie-pagination-button" 
        disabled={page.last} onClick={() => onChange(page.number + 1)}>{/* Componete que envia um componente */}
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;