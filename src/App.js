import React, { Component } from "react";
import "./App.css";
import Layout from "./components/layout.js";
import PageHome from "./pageHome";
import PageSearchResult from "./pageSearchResult";
import PageArtist from "./pageArtist";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/busqueda' component={ PageSearchResult }/>
            <Route exact path='/artista' component={ PageArtist }/>
            <Route path='/' component={ PageHome }/>
          </Switch>
        </Layout>
      </BrowserRouter>       
    );
  }
}

export default App;
