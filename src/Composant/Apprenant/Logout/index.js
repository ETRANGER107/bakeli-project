import React, { useEffect, useState } from "react"
import { withFirebase } from "../../Firebase/context"
import "./index.css"


const SignOutButton = ({firebase}) =>{
    const [checked, setChecked] = useState(false)

    useEffect(()=>{
        if(checked){
            console.log("deconnexion")
            firebase.doSignOut();
        }
    }, [checked, firebase])

    const handleChange = (e)=>{
        setChecked(e.target.checked)
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