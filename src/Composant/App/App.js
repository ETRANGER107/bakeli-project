import React, {useState, useEffect, useContext} from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Navigation from '../Navigation/Navigation';
//import Navigation2 from '../Navigation/Navigation2';
import Navigation3 from '../Navigation/Navigation2';
import LandingPage from '../Landing/index';
import SignUpPage from '../Administrateur/InscriptionAdmin/SignupPage';
import SignInPageApp from '../Apprenant/Connexion/SignInPageApp';
import SignInPageAdm from '../Administrateur/ConnexionAdmin/SigninPageAdm';
import ListeCoursAdmin from '../Administrateur/Cours/ListeCoursAdmin/ListeCoursAdmin';
import ListeCours from '../Apprenant/Cours/ListeCours/ListeCours';
import AddCourse from '../Administrateur/Cours/AjoutCours/AddCourse';
import Archive from '../Administrateur/Cours/Archive/Archive';
import DetailArchive from '../Administrateur/Cours/Archive/DetailArchive';
import AjoutProfesseur from '../Administrateur/Professeur/AjoutProfesseur/AjoutProfesseur';
import ListeProfesseur from '../Administrateur/Professeur/ListeProfesseur/ListeProfesseur';
import DetailProfesseur from '../Administrateur/Professeur/DetailProfesseur/DetailProfesseur';
// import ArchiveProfesseur from '../Administrateur/Professeur/Archives/Archive/ArchiveProfesseur';
import AjoutApprenant from '../Administrateur/Apprenant/AjoutApprenant/AjoutApprenant';
import ListeApprenant from '../Administrateur/Apprenant/ListeApprenant/ListeApprenant';
import DetailApprenant from '../Administrateur/Apprenant/DetailApprenant/DetailApprenant';
import ArchiveApp from "../Administrateur/Apprenant/Archive/Archives"
import Calendars from '../Apprenant/HomePageApp/Aside/Calendars';
//import PasswordForgetPage from '../PasswordForget';
import HomePageAdmin from '../Administrateur/HomePageAdmin/HomePageAdmin';
import HomePageApp from '../Apprenant/HomePageApp/HomePageApp';
//import AccountPage from '../Account';
//import AdminPage from '../Admin';

import * as ROUTES from '../../Constant/routes';
import './App.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import FirebaseContext from '../Firebase/context'
import ProtectedRoute from '../ProtectedRoute';




const App = () => {


  const firebase = useContext(FirebaseContext);

  const [authentication, setAuthState] = useState({
    authenticated: false,
    initializing: true
  });

  useEffect(() => 
    firebase.auth.onAuthStateChanged(user => {
    if (user) {
      setAuthState({
        authenticated: true,
        initializing: false
      });
    } else {
      setAuthState({
        authenticated: false,
        initializing: false
      });
    }
  }), [setAuthState]);

  


  if (authentication.initializing) {
    return(
      <>
      <div className="loader">
      <p className="loaderTex"></p>
      </div>
      
      </>
    ) 
  }




  return (
    <Router>
            <div>


            <ProtectedRoute path={ROUTES.HOME_ADM} component={HomePageAdmin} authenticated={authentication.authenticated}/>
                <Route exact path={ROUTES.LANDING} component={LandingPage} authenticated={authentication.authenticated}/>
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route path={ROUTES.SIGN_IN} component={SignInPageApp} />
                <Route path={ROUTES.SIGN_IN_ADM} component={SignInPageAdm} />
                <ProtectedRoute path={ROUTES.COURS_ADM} component={ListeCoursAdmin} authenticated={authentication.authenticated}/>
                <ProtectedRoute path={ROUTES.HOME} component={HomePageApp} authenticated={authentication.authenticated}/>
                {/* <Route path={ROUTES.HOME_ADM} component={HomePageAdmin} authenticated={authentication.authenticated}/> */}
                {/* <Route path={ROUTES.COURS_ADM} component={ListeCoursAdmin} authenticated={authentication.authenticated}/> */}
                <ProtectedRoute path={ROUTES.COURS_APP} component={ListeCours} authenticated={authentication.authenticated}/>
                {/* <Route path={ROUTES.COURS_APP} component={ListeCours} authenticated={authentication.authenticated}/> */}
                <ProtectedRoute path={ROUTES.ADD_COURSE} component={AddCourse} authenticated={authentication.authenticated}/>
                {/* <Route path={ROUTES.ADD_COURSE} component={AddCourse} authenticated={authentication.authenticated}/> */}
                {/* <Route path={ROUTES.ARCHI_COURSE} component={Archive} /> */}
                <ProtectedRoute path={ROUTES.ARCHI_COURSE} component={Archive} authenticated={authentication.authenticated}/>
                {/* <Route path={ROUTES.DETAIL_ARCHI_COURSE} component={DetailArchive} authenticated={authentication.authenticated}/> */}
                <ProtectedRoute path={ROUTES.DETAIL_ARCHI_COURSE} component={DetailArchive} authenticated={authentication.authenticated}/>
                {/* <Route path={ROUTES.ADD_PROF} component={AjoutProfesseur} authenticated={authentication.authenticated}/> */}
                <ProtectedRoute path={ROUTES.ADD_PROF} component={AjoutProfesseur} authenticated={authentication.authenticated}/>
                {/* <Route path={ROUTES.LISTE_PROF} component={ListeProfesseur} authenticated={authentication.authenticated}/> */}
                <ProtectedRoute path={ROUTES.LISTE_PROF} component={ListeProfesseur} authenticated={authentication.authenticated}/>
                {/* <Route path={ROUTES.DETAIL_PROF} component={DetailProfesseur} authenticated={authentication.authenticated}/> */}
                <ProtectedRoute path={ROUTES.DETAIL_PROF} component={DetailProfesseur} authenticated={authentication.authenticated}/>
                {/* <Route path={ROUTES.ADD_APP} component={AjoutApprenant} authenticated={authentication.authenticated}/> */}
                <ProtectedRoute path={ROUTES.ADD_APP} component={AjoutApprenant} authenticated={authentication.authenticated}/>
                {/* <Route path={ROUTES.LISTE_APP} component={ListeApprenant} authenticated={authentication.authenticated}/> */}
                <ProtectedRoute path={ROUTES.LISTE_APP} component={ListeApprenant} authenticated={authentication.authenticated}/>
                {/* <Route path={ROUTES.DETAIL_APP} component={DetailApprenant} authenticated={authentication.authenticated}/> */}
                <ProtectedRoute path={ROUTES.DETAIL_APP} component={DetailApprenant} authenticated={authentication.authenticated}/>
                {/* <Route path={ROUTES.ARCHI_APP} component={ArchiveApp} authenticated={authentication.authenticated}/> */}
                <ProtectedRoute path={ROUTES.ARCHI_APP} component={ArchiveApp} authenticated={authentication.authenticated}/>
                {/* <Route path={ROUTES.CALENDAR} component={Calendars} authenticated={authentication.authenticated}/> */}
                {/* <ProtectedRoute path={ROUTES.CALEND} component={Calendars} authenticated={authentication.authenticated}/> */}
           
                {/*<Navigation />
                <Navigation2 />*/}
                {/* <Navigation3 /> */}

                {/* <hr/>
                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route exact path={ROUTES.SIGN_IN} component={SignInPageApp} />
                <Route exact path={ROUTES.SIGN_IN_ADM} component={SignInPageAdm} />
                <Route exact path={ROUTES.HOME} component={HomePageApp} />
                <Route exact path={ROUTES.HOME_ADM} component={HomePageAdmin} />
                <Route exact exact path={ROUTES.COURS_ADM} component={ListeCoursAdmin} />
                <Route exact path={ROUTES.COURS_APP} component={ListeCours} />
                <Route exact path={ROUTES.ADD_COURSE} component={AddCourse} />
                <Route exact path={ROUTES.ARCHI_COURSE} component={Archive} />
                <Route exact path={ROUTES.DETAIL_ARCHI_COURSE} component={DetailArchive} />
                <Route exact path={ROUTES.ADD_PROF} component={AjoutProfesseur} />
                <Route exact path={ROUTES.LISTE_PROF} component={ListeProfesseur} />
                <Route exact path={ROUTES.DETAIL_PROF} component={DetailProfesseur} />
                <Route exact path={ROUTES.ARCHI_PROF} component={ArchiveProfesseur} />
                <Route exact path={ROUTES.ADD_APP} component={AjoutApprenant} />
                <Route exact path={ROUTES.LISTE_APP} component={ListeApprenant} />
                <Route exact path={ROUTES.DETAIL_APP} component={DetailApprenant} />
                <Route exact path={ROUTES.ARCHI_APP} component={ArchiveApp} />
                <Route exact path={ROUTES.CALENDAR} component={Calendars} /> */}
            </div>
            
        </Router>

  );
}

export default App;

