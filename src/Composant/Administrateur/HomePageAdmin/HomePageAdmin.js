// import React from "react"
// import "./HomePageAdmin.css"
// import jQuery from 'jquery' 
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import ListeCoursAdm from "../../Administrateur/Cours/ListeCoursAdmin/ListeCoursAdmin"
// import ListApprenant from "../../Administrateur/Apprenant/ListeApprenant/ListeApprenant"
// import ListeProfesseur from "../../Administrateur/Professeur/ListeProfesseur/ListeProfesseur"
// import * as ROUTES from '../../../Constant/routes';
// import ListeApprenant from "../../Administrateur/Apprenant/ListeApprenant/ListeApprenant";
// //import ListApprenant from "../Apprenant/ListApprenant"
// //import ApprenantProvider from "../Apprenant/context/AppreantContext";

// import SignOutButton from "../../Deconnexion/Deconnexion"

// const HomePageAdmin = () => {


//     {(function($) {

//         "use strict";
    
//         var fullHeight = function() {
    
//             $('.js-fullheight').css('height', $(window).height());
//             $(window).resize(function(){
//                 $('.js-fullheight').css('height', $(window).height());
//             });
    
//         };
//         fullHeight();
    
//         $('#sidebarCollapse').on('click', function () {
//           $('#sidebar').toggleClass('active');
//       });
    
//     })(jQuery);}

//     return(
//         <div>
//             {/*<ApprenantProvider>
//             <ListApprenant/>
//             </ApprenantProvider>*/}
//             <div class="wrapper d-flex align-items-stretch">
// 			<nav id="sidebar" class="active">
// 				<h1><Link className="logo nav-link" to={ROUTES.HOME_ADM}>M.</Link></h1>
//                 <ul class="list-unstyled components mb-5">
//                 <li className="nav-item active">
//                     <Link className="nav-link" to={ROUTES.HOME_ADM}><span class="fa fa-home"></span>Home</Link>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <Link className="nav-link dropdown-toggle" to={ROUTES.HOME_ADM} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button"><span class="fa fa-user-plus" aria-hidden="true"></span> Ajouter</Link>
//                     <div className="dropdown-menu bg-primary">
//                         <Link className="dropdown-item px-4 py-2" to={ROUTES.SIGN_UP}>Ajouter apprenant</Link>
//                         <Link className="dropdown-item px-4 py-2" to={ROUTES.ADD_PROF}>Ajouter professeur</Link>
//                         <Link className="dropdown-item px-4 py-2" to={ROUTES.ADD_COURSE}>Ajouter cours</Link>
//                     </div>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <Link className="nav-link dropdown-toggle" to={ROUTES.HOME_ADM} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button"><span class="fa fa-file-archive" aria-hidden="true"></span> Archives</Link>
//                     <div className="dropdown-menu bg-primary">
//                         <Link className="dropdown-item px-4 py-2" to={ROUTES.ADD_COURSE}>Archive des apprenant</Link>
//                         <Link className="dropdown-item px-4 py-2" to={ROUTES.ADD_PROF}>Archive des professeur</Link>
//                         <Link className="dropdown-item px-4 py-2" to={ROUTES.ARCHI_COURSE}>Archive des cours</Link>
//                     </div>
//                 </li>
//                 <li>
//                     <a href="#"><span class="fa fa-cogs"></span> Compte</a>
//                 </li>
//                 <li>
//                     <Link className="nav-link" to={ROUTES.HOME}><span class="fa fa-paper-plane"></span>HomeApp</Link>
//                 </li>
//                 </ul>

//                 <div class="footer">
//                     <p>
//                         Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
//                     </p>
//                 </div>
//             </nav>

//             {/*------Page Content------*/}  
//             <div id="content" class="p-4 p-md-5">

//             <nav class="navbar navbar-expand-lg navbar-light bg-light">
//             <div class="container-fluid">

//                 <button type="button" id="sidebarCollapse" class="btn btn-primary">
//                 <i class="fa fa-bars"></i>
//                 <span class="sr-only">Toggle Menu</span>
//                 </button>
//                 <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <i class="fa fa-bars"></i>
//                 </button>

//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul class="nav navbar-nav ml-auto">
//                     <li className="nav-item">
//                         <Link className="nav-link" to={ROUTES.COURS_ADM}>ListeCoursAdm</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to={ROUTES.COURS_APP}>ListeCoursApp</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to={ROUTES.LISTE_PROF}>ListeProf</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to={ROUTES.LISTE_APP}>ListeApprenant</Link>
//                     </li>
//                     <li className="nav-item">
//                         <SignOutButton />
//                     </li>
//                 </ul>
//                 </div>
//             </div>
//             </nav>

//                 <h2 class="mb-4">Dashboard administrateur</h2>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//                 {/*<Router>
//                 <Switch>
//                     <Route path="ROUTES.COURS_ADM" exact component={ListeCoursAdm} />
//                     <Route path="ROUTES.COURS_ADM/ROUTES.LISTE_APP" component={ListeApprenant} />
//                     <Route path="ROUTES.LISTE_PROF" component={ListeProfesseur} />
//                     <Route render={() => <h1>404: page not found</h1>} />
//                 </Switch>
//                 </Router>*/}
//             </div>
// 		</div>
            
//         </div>
//     )
// }

// export default HomePageAdmin;



import React from "react"
import "./HomePageAdmin.css"
import jQuery from 'jquery' 

import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import ListeCoursAdm from "../../Administrateur/Cours/ListeCoursAdmin/ListeCoursAdmin"
import ListApprenant from "../../Administrateur/Apprenant/ListeApprenant/ListeApprenant"
import ListeProfesseur from "../../Administrateur/Professeur/ListeProfesseur/ListeProfesseur"
import * as ROUTES from '../../../Constant/routes';
import ListeApprenant from "../../Administrateur/Apprenant/ListeApprenant/ListeApprenant";
import AddCourse from "../Cours/AjoutCours/AddCourse";
import Aside from "./Aside/Aside";
//import ListApprenant from "../Apprenant/ListApprenant"
//import ApprenantProvider from "../Apprenant/context/AppreantContext";

const HomePageAdmin = () => {


    {(function($) {

        "use strict";
    
        var fullHeight = function() {
    
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function(){
                $('.js-fullheight').css('height', $(window).height());
            });
    
        };
        fullHeight();
    
        $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
    
    })(jQuery);}

    return(
        <div>
            {/*<ApprenantProvider>
            <ListApprenant/>
            </ApprenantProvider>*/}
            <div className="row">
            <div className="col-lg-9 main-page">
            <div class="wrapper d-flex align-items-stretch">
			<nav id="sidebar" class="active">
				<h1><Link className="logo nav-link" to={ROUTES.HOME_ADM}>M.</Link></h1>
                <ul class="list-unstyled components mb-5">
                <li className="nav-item active">
                    <Link className="nav-link" to={ROUTES.HOME_ADM}><span class="fa fa-home"></span>Home</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to={ROUTES.HOME_ADM} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button"><span class="fa fa-user-plus" aria-hidden="true"></span> Ajouter</Link>
                    <div className="dropdown-menu bg-primary">
                        <Link className="dropdown-item px-4 py-2" to={ROUTES.SIGN_UP}>Ajouter apprenant</Link>
                        <Link className="dropdown-item px-4 py-2" to={ROUTES.ADD_PROF}>Ajouter professeur</Link>
                        <Link className="dropdown-item px-4 py-2" to={ROUTES.ADD_COURSE}>Ajouter cours</Link>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to={ROUTES.HOME_ADM} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button"><span class="fa fa-file-archive" aria-hidden="true"></span> Archives</Link>
                    <div className="dropdown-menu bg-primary">
                        <Link className="dropdown-item px-4 py-2" to={ROUTES.ADD_COURSE}>Archive des apprenant</Link>
                        <Link className="dropdown-item px-4 py-2" to={ROUTES.ADD_PROF}>Archive des professeur</Link>
                        <Link className="dropdown-item px-4 py-2" to={ROUTES.ARCHI_COURSE}>Archive des cours</Link>
                    </div>
                </li>
                <li>
                    <a href="#"><span class="fa fa-cogs"></span> Compte</a>
                </li>
                <li>
                    <Link className="nav-link" to={ROUTES.HOME}><span class="fa fa-paper-plane"></span>HomeApp</Link>
                </li>
                </ul>

                <div class="footer">
                    <p>
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
                    </p>
                </div>
            </nav>

            {/*------Page Content------*/}  
            <div id="content" class="p-4 p-md-5">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">

                <button type="button" id="sidebarCollapse" class="btn btn-primary">
                <i class="fa fa-bars"></i>
                <span class="sr-only">Toggle Menu</span>
                </button>
                <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.COURS_ADM}>ListeCours</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.LISTE_PROF}>ListeProf</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.LISTE_APP}>ListeApprenant</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

                <h2 class="mb-4">Dashboard administrateur</h2>
                
                
            </div>
            </div>
            </div>
            <div className="col-lg-3 pt-5 px-4 aside">
                <Aside />
            </div>
		</div>
            
        </div>
    )
}

export default HomePageAdmin;
