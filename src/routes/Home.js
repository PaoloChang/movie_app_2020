import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    console.log(movies);
    this.setState({movies, isLoading: false})
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        { isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {
              movies.map(movie => 
                <Movie 
                  key={movie.id} 
                  id={movie.id} 
                  title={movie.title} 
                  year={movie.year} 
                  genres={movie.genres}
                  poster={movie.medium_cover_image}
                  rating={movie.rating}
                  summary={movie.summary} 
                />
              )
            }
          </div>
        )} 
      </section>
    );
  }
}

export default Home;
