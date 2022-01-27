import MovieStars from "components/MovieStars";
import './styles.css';

type Props = {
  score: number;
  count: number
}

function MovieScore({ score , count } : Props) {

    return (
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
        {/* Condicional ternário: se anota maior que o, então irá aparecer
        se for false, mostra o traço - sem avaliação ainda. */}
      </p>
      <MovieStars score={score}/>
      <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;
