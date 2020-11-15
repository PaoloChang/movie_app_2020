import React, { Component } from "react";
import StarRating from "react-star-ratings";

export default class Detail extends Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            const movie = location.state;
            return (
                <div className="movie">
                    <img src={movie.poster} alt={movie.title} title={movie.title}/>
                    <div className="movie__data">
                        <h3 className="movie__title">{movie.title}</h3>
                        <h5 className="movie__year">{movie.year}</h5>
                        <ul className="movie__genres">
                            {movie.genres.map((genre, index) => (
                                <li key={index} className="genres__genre">
                                    {genre}
                                </li>
                            ))}
                        </ul>
                        <StarRating
                            rating={movie.rating/10 * 5}
                            numberOfStars={5}
                            starRatedColor="gold"
                            starDimension="15px"
                            starSpacing="1px"
                            name="rating"
                        />
                        <p className="movie__summary">{ movie.summary }</p>
                    </div>
                </div>
            )
        }
        else {
            return null;
        }
    }
}
