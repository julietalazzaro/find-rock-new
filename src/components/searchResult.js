import React, { Component } from "react";
import ArtistCard from "./artistCard";
import Loading from "./loading.js";
import Error from "./error.js";

class SearchResult extends Component {
  state = {
    loading: false,
    error: null,
    errorMessage: "",
    data: {
      similarartists: {
        artist: [],
      },
    },
  };

  // componentDidMount() {
  //   let url = `http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${this.props.busqueda}&api_key=19fde10e8a19cdde7d44a245f972bb9b&format=json`;
  //   this.fetchData(url);
  // }
  componentWillReceiveProps(e) {
    let url = `http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${e.busqueda}&api_key=19fde10e8a19cdde7d44a245f972bb9b&format=json`;
    this.fetchData(url);
  }

  fetchData = async (url) => {
    try {
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
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMessage={this.state.errorMessage} />}
        {this.state.data.similarartists.artist.length === 0 && (
          <Error errorMessage="No hay resultados para tu busqueda" />
        )}
        {!this.state.error && (
          <div className="container">
            <div className="row">
              {this.state.data.similarartists.artist.map((artista, i) => {
                return (
                  <ArtistCard
                    img={"https://via.placeholder.com/350x350"}
                    titulo={artista.name}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default SearchResult;
