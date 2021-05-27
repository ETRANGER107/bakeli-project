import React from "react"
import { Link } from 'react-router-dom';
import AppLength from "../../Apprenant/ListeApprenant/AppLength";
import CourLength from "../../Cours/ListeCoursAdmin/CourLength";
import ProfLength from "../../Professeur/ListeProfesseur/ProfLength";
import Tutorial from "../../Cours/ListeCoursAdmin/ListeCoursAdmin";
import tutorials from "../../Cours/ListeCoursAdmin/ListeCoursAdmin";
import TutorialDataService from "../../Cours/ListeCoursAdmin/ListeCoursAdmin";


const LandingAdm = () => {
    
    return(
        <div class="grey-bg container-fluid">
            <section id="minimal-statistics">
                <div class="row">
                <div class="col-12">
                    <p>Statistics global.</p>
                </div>
                </div>
                <div class="row">
                <div class="col-xl-4 col-sm-6 col-12"> 
                    <div class="card">
                    <Link to={"/liste_prof"}>
                    <div class="card-content">
                        <div class="card-body">
                        <div class="media d-flex">
                            <div class="align-self-center">
                            <i class="icon-pencil primary font-large-2 float-left"></i>
                            </div>
                            <div class="media-body text-right">
                            <h3><ProfLength /></h3>
                            <span>Professeurs</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Link>
                    </div>
                </div>
                <div class="col-xl-4 col-sm-6 col-12">
                    <div class="card">
                    <Link to={"/liste_cours_adm"}>
                    <div class="card-content">
                        <div class="card-body">
                        <div class="media d-flex">
                            <div class="align-self-center">
                            <i class="icon-book-open warning font-large-2 float-left" aria-hidden="true"></i>
                            </div>
                            <div class="media-body text-right">
                            {/* {tutorials.length} */}
                           {/* {` ${tutorials.length}`} */}
              
              
            
          
                            <h3><CourLength/></h3>
                            <span>Total Cours</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Link>
                    </div>
                </div>     
                <div class="col-xl-4 col-sm-6 col-12">
                    <div class="card">
                    <Link to={"/liste_app"}>
                    <div class="card-content">
                        <div class="card-body">
                        <div class="media d-flex">
                            <div class="align-self-center">
                            <i class="icon-user danger font-large-2 float-left"></i>
                            </div>
                            <div class="media-body text-right">

                            <h3><AppLength /></h3>

                            <span>Utilisateurs</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Link>
                    </div>
                </div>
                </div>
            
                <div class="row">
                <div class="col-xl-4 col-sm-6 col-12">
                    <div class="card">
                    <div class="card-content">
                        <div class="card-body">
                        <div class="media d-flex">
                            <div class="media-body text-left">
                            <h3 class="danger">48</h3>
                            <span>Projets</span>
                            </div>
                            <div class="align-self-center">
                            <i class="icon-rocket danger font-large-2 float-right"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-xl-4 col-sm-6 col-12">
                    <div class="card">
                    <div class="card-content">
                        <div class="card-body">
                        <div class="media d-flex">
                            <div class="media-body text-left">
                            <h3 class="success">156</h3>
                            <span>New User</span>
                            </div>
                            <div class="align-self-center">
                            <i class="icon-pointer success font-large-2 float-right"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            
                
                <div class="col-xl-4 col-sm-6 col-12">
                    <div class="card">
                    <div class="card-content">
                        <div class="card-body">
                        <div class="media d-flex">
                            <div class="media-body text-left">
                            <h3 class="primary">23</h3>
                            <span>tickets de support</span>
                            </div>
                            <div class="align-self-center">
                            <i class="icon-support primary font-large-2 float-right"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>          
                <div class="row">
                <div class="col-xl-4 col-sm-6 col-12">
                    <div class="card">
                    <Link to={"/liste_cours_adm"}>
                    <div class="card-content">
                        <div class="card-body">
                        <div class="media d-flex">
                            <div class="media-body text-left">
                            <h3 class="primary">2</h3>
                            <span>Nouveau Cours</span>
                            </div>
                            <div class="align-self-center">
                            <i class="fa fa-book primary font-large-2 float-right"></i>
                            </div>
                        </div>
                        <div class="progress mt-1 mb-0" style={{height:"7px"}}>
                            <div class="progress-bar bg-primary" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                    </div>
                    </Link>
                    </div>
                </div>
                <div class="col-xl-4 col-sm-6 col-12">
                    <div class="card">
                    <div class="card-content">
                        <div class="card-body">
                        <div class="media d-flex">
                            <div class="media-body text-left">
                            <h3 class="warning">156</h3>
                            <span>Forum</span>
                            </div>
                            <div class="align-self-center">
                            <i class="icon-bubbles warning font-large-2 float-right"></i>
                            </div>
                        </div>
                        <div class="progress mt-1 mb-0"  style={{height: "7px"}}>
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "35%"}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            
                
                <div class="col-xl-4 col-sm-6 col-12">
                    <div class="card">
                    <div class="card-content">
                        <div class="card-body">
                        <div class="media d-flex">
                            <div class="media-body text-left">
                            <h3 class="danger">423</h3>
                            <span>Total Visiteurs</span>
                            </div>
                            <div class="align-self-center">
                            <i class="icon-direction danger font-large-2 float-right"></i>
                            </div>
                        </div>
                        <div class="progress mt-1 mb-0" style={{height: "7px"}}>
                            <div class="progress-bar bg-danger" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
  
        </div>
    )
}

export default LandingAdm