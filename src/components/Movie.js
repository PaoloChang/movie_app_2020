import React from "react";
import { Link } from "react-router-dom"; 
import PropTypes from "prop-types";
import StarRating from 'react-star-ratings';
import "./Movie.css";

function Movie({id, title, year, genres, poster, rating, summary }) {
    return (
        <div className="movie">
            <Link className="link" to={{
                pathname: `/movie/${id}`,
                state: {
                    title,
                    year,
                    genres,
                    poster,
                    rating,
                    summary
                }
            }}>
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres__genre">
                            {genre}
                        </li>
                    ))}
                </ul>
                <StarRating
                    rating={rating/10 * 5}
                    numberOfStars={5}
                    starRatedColor="gold"
                    starDimension="15px"
                    starSpacing="1px"
                    name="rating"
                />
                <p className="movie__summary">{ summary.length > 180 ? summary.slice(0, 180) + "..." :summary }</p>
            </div>
            </Link>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;