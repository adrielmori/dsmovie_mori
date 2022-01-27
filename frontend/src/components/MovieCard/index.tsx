import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";

type Props = {
  movie: Movie;//tipo de dado que a função irá receber
}

//Objeto movie que irá chegar como arguemento para a função 
function MovieCard( { movie } : Props) {
  return (
    <div>
      <img
        className="dsmovie-movie-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore count={movie.count} score={movie.score} />

        <Link to={`/form/${movie.id}`}>
          <div className="btn btn-primary dsmovie-btn">Avaliar</div>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
