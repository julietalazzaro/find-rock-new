import React, { Component } from "react";
import ArtistCard from "./artistCard.js";

class SimilarArtists extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row centrar margin50">
          <div className="col-md-12">
            <h4>Similar Artists</h4>
            <hr />
          </div>
        </div>
        <div className="row">
          {this.props.artists.slice(0, 4).map((artist, i) => {
            return (
              <ArtistCard
                titulo={artist.name}
                img="https://via.placeholder.com/350x350"
                key={i}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtists;
