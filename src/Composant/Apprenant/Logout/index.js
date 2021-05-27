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
        <div className="logoutContainer m-0">
            <label className="switch mx-auto my-0">
                <input type="checkbox" onChange={handleChange} checked={checked}/>
                <span className="slider round bg-info my-0"></span>
            </label>
        </div>
  
       </>
            
        
    )
}
    
  

 
export default withFirebase(SignOutButton);
