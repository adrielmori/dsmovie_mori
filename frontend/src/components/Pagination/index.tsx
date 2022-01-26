/* Mecanismo de navegação do tipo paginação na página inicial */
import { ReactComponent as Arrow } from 'assets/img/arrow.svg'

function Pagination() {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={true}> {/* Comando para implementação do botão para paginação */}
         {/* disabled é para habilitar e desabilitar a paginação */}
          <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="dsmovie-pagination-button" disabled={false}>
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
