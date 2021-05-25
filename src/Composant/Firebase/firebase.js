import app from 'firebase/app'
import 'firebase/auth'
import "firebase/database";
import firebase from 'firebase';


//import firebase from "../Firebase/";



var config = {
    apiKey: "AIzaSyA1mOh2IWpqQjKCGgWTK-ojttglwyrjR7U",
    authDomain: "tache-21.firebaseapp.com",
    databaseURL: "https://tache-21-default-rtdb.firebaseio.com",
    projectId: "tache-21",
    storageBucket: "tache-21.appspot.com",
    messagingSenderId: "380978163478",
    appId: "1:380978163478:web:03fc7bdab33cd222d96a37"
}



firebase.initializeApp(config);



class Firebase{
    constructor(){
        
        


        this.auth = app.auth();

        this.db = app.database();

        /* Helper */

    this.serverValue = app.database.ServerValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    }

    signUpser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email,  password)

    loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password)

    // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = [];
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });


      // *** User API ***
      user = uid => this.db.ref(`users/${uid}`);
      users = () => this.db.ref('users');

      // *** Cours API ***

      Cour = uid => this.db.ref(`Cours/${uid}`);
      Cours = () => this.db.ref('Cours');

      Cours2 = uid => this.db.ref(`Cours2/${uid}`);
      Cours2 = () => this.db.ref('Cours2');

      // *** Apprenant API ***

      DetailApprenant = uid => this.db.ref(`DetailApprenant/${uid}`);
      DetailApprenants = () => this.db.ref('DetailApprenant');

      // *** Professeur API ***

      // ajout_prof = uid => this.db.ref(`ajout_prof/${uid}`);
      // ajout_profs = () => this.db.ref('ajout_prof');

}




export default Firebase;