import React from 'react';
import { Link } from 'react-router-dom';
import afr from "../../afr.jpg"
import "./Landing.css"

function LandingPage(props) {
  return (
    <>
      <div className="container-fluid d-flex flex-row h-100 justify-content-around">
        <div classNameName="row">
          <div className=" align-self-center">
            {/* <div className="card text-white bg-secondary mb-3" style={{ maxWidth: "18rem"}}> */}
             <h2>Se connecter</h2>
              <div className="card bg-danger">
              <Link to="/signin" className="btn btn-white text-dark">Apprenant</Link>
              </div>
            {/* </div> */}
          {/* <div className="card text-white bg-info mb-3 mt-5" style={{ maxWidth: "23rem"}}> */}
            {/* <div className="card-header text-center">Administrateur</div> */}
            <div className="card bg-info">
              <Link to="/signin_adm" className="btn btn-white text-dark">Admin</Link>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
    </>
  );
}

export default LandingPage;
