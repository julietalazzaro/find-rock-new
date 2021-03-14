import React, { Component } from "react";
import "./pageHome.css";
import logo from "./logo.svg";

class PageHome extends Component {
  state = {
    busqueda: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };

  onChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container centrado">
          <div className="row">
            <div className="col-lg-12  centrar">
              <img id="logo " src={logo} alt="" />
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
                    // value={this.props.busqueda}
                    value={this.state.busqueda}
                    placeholder="Buscar"
                    onChange={this.onChange}
                    // onChange={this.props.onChange}
                  />
                </div>
              </form>
              <div className="actions">
                <button
                  type="submit"
                  className="btng"
                  onClick={this.handleSubmit}
                >
                  Search Similar Artist
                </button>
                <button className="btng">EscuelaDevRock</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageHome;
