import React, { useState, useEffect, useContext} from 'react';
import './index.css'
import { FirebaseContext, withFirebase } from '../../Firebase';

 
const SignOutButton = () => {


    const firebase = useContext(FirebaseContext)

    // console.log(firebase)

    const [checked, setChecked] = useState(false);
    console.log(checked)

        useEffect(() => {
        if(checked){
            console.log("deconexion")
            firebase.doSignOut();
        }
    }, [checked, firebase])

   
    const handleChange = event =>{
        setChecked(event.target.checked)
    }


    
    return(
       <>
        <div className="logoutContainer">
            <label className="switch">
                <input type="checkbox" onChange={handleChange} checked={checked}/>
                <span className="slider round"></span>
            </label>
        </div>
  
       </>
            
        
    )
}
    
  

 
export default withFirebase(SignOutButton);
