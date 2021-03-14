import React, { Component } from "react";
import "./artistCard.css";
import { Link } from "react-router-dom";

class ArtistCard extends Component {
  state = {};
  render() {
    return (
      <div className="col-3">
        <div className="item">
          <Link to={"/artista?" + this.props.titulo}>
            <img className="pic" src={this.props.img} alt="" />
            <p className="titulo">{this.props.titulo}</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default ArtistCard;
