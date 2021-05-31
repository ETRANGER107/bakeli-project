import React from 'react';
import { Link } from 'react-router-dom';
import ifd4 from "../../ifd4.jpg"
// import "./Landing.css"

function LandingPage(props) {
  return (
    <>
      <div className="container-fluid d-flex flex-row h-100 justify-content-around" style={{ backgroundImage: `url(${ifd4})`, backgroundRepeat: 'no-repeat', minHeight: "100vh", minWidth: "100vh"}}>
        
        <div classNameName="row" style={{display:"flex", flexDirection: "row", alignItems: "center"}}>
        
          <div className=" align-item-center">
            {/* <div className="card text-white bg-secondary mb-3" style={{ maxWidth: "18rem"}}> */}
            
             <h2>Se connecter</h2>
             <br/>
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
