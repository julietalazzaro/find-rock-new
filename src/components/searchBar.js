import React, { Component } from "react";
import "./searchBar.css";
import logo from "../logo.svg";

import { Link } from "react-router-dom";

class SearchBar extends Component {
  // state = {
  //   busqueda:''
  // };
  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  //   console.log(e.target.name, e.target.value);
  // };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row nowrap">
            <div className="col-md-2">
              <Link to="/">
                <img className="logo-barra" src={logo} alt="" />
              </Link>
            </div>
            {this.props.showBusqueda && (
              <div className="col-md-4">
                <form
                  name="form"
                  className="form-inline"
                  onSubmit={this.handleSubmit}
                >
                  <div className="busqueda">
                    <input
                      name="busqueda"
                      type="text"
                      id="buscar"
                      // value={this.state.busqueda}
                      value={this.props.busqueda}
                      placeholder="Buscar"
                      // onChange={this.handleChange}
                      onChange={this.props.onChange}
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default SearchBar;
