import MovieStar from "components/MovieStar";
import './styles.css';

function MovieScore() {
  
  const score=3.5;
  const count=13; /* Contagem de avaliações */

    return (
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
        {/* Condicional ternário: se anota maior que o, então irá aparecer
        se for false, mostra o traço - sem avaliação ainda. */}
      </p>
      <MovieStar />
      <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;
