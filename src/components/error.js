import React from "react";
import "./loading.css";

const Error = (props) => {
  return (
    <React.Fragment>
      <div className="upp">
        <div className="colmd-12 centrar">
          <h3>Error</h3>
          {props.errorMessage ===
          "The artist you supplied could not be found" ? (
            <p>No hay resultados para tu busqueda</p>
          ) : (
            <p>{props.errorMessage}</p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Error;
