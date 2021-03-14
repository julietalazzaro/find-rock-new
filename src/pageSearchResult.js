import React, { Component } from "react";
import SearchBar from "./components/searchBar";
import SearchResult from "./components/searchResult";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };

  // UNSAFE_componentWillMount() {
  //   console.log("componentWillMount");
  // }
  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");
    this.setState({ busqueda: search });
  }
  // componentWillUnmount() {
  //   console.log("se fue");
  // }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.history.push("/busqueda?" + e.target.value);
  };
  render() {
    // console.log("render");
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
          showBusqueda={true}
        />
        <br />
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
