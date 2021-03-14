import React, { Component } from "react";
import SearchBar from "./components/searchBar";
import SimilarArtists from "./components/similarArtists";
import Loading from "./components/loading.js";
import Error from "./components/error.js";
import "./pageArtist.css";

class PageArtist extends Component {
  state = {
    loading: false,
    error: null,
    errorMessage: "",
    data: {
      artist: {
        name: "",
        bio: [],
        similar: {
          artist: [{ name: "" }],
        },
      },
    },
    busqueda: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    try {
      let search = this.props.history.location.search.substr(1);
      let url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${search}&api_key=19fde10e8a19cdde7d44a245f972bb9b&format=json`;

      this.setState({ loading: true });
      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        this.setState({
          error: true,
          loading: false,
          errorMessage: data.message,
        });
      } else {
        this.setState({ data: data, loading: false, error: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        error: true,
        loading: false,
        errorMessage: error.toString(),
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
          showBusqueda={false}
        />
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMessage={this.state.errorMessage} />}
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img
                className="pic-artist margin50 "
                src="https://via.placeholder.com/350x350"
                alt="imagen artista"
              />
              <h3>{this.state.data.artist.name}</h3>
              <p>{this.state.data.artist.bio.summary}</p>
            </div>
          </div>
          <SimilarArtists artists={this.state.data.artist.similar.artist} />
        </div>
      </React.Fragment>
    );
  }
}

export default PageArtist;
