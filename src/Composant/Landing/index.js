import React from 'react';
import { Link } from 'react-router-dom';
import afr from "../../afr.jpg"
// import "./Landing.css"

function LandingPage(props) {
  return (
    <>
      <div className="container-fluid d-flex flex-row h-100 justify-content-center"  style={{ backgroundImage: `url(${afr})`, backgroundRepeat: 'no-repeat', minHeight: "100vh", width: "auto"}}>
        <div classNameName="row">
          <div className=" align-self-center">
            {/* <div className="card text-white bg-secondary mb-3" style={{ maxWidth: "18rem"}}> */}
             
              <div className="card-body">
              <Link to="/signin" className="btn btn-white text-dark">se connecter en tant que apprenant</Link>
              </div>
            {/* </div> */}
          {/* <div className="card text-white bg-info mb-3 mt-5" style={{ maxWidth: "23rem"}}> */}
            {/* <div className="card-header text-center">Administrateur</div> */}
            <div className="card-body">
              <Link to="/signin_adm" className="btn btn-white text-dark">se connecter en tant que admin</Link>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
    </>
  );
}

export default LandingPage;
