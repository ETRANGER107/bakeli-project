import React, { useEffect, useState, useContext } from 'react';
import { Form, Button, Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FirebaseContext } from '../../Firebase';
import * as ROUTES from '../../../Constant/routes';




const SignInPageAdm = (props) => {





    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    
    const [ btn, setBtn ] = useState(false)
    
    const [ error, setError ] = useState("")

    const firebase = useContext(FirebaseContext);

    console.log(firebase)
    
    useEffect(()=>{
        if(password.length > 5 && email !== ""){
            setBtn(true)
        } else if( btn){
            setBtn(false)
        }
    }, [password, email])
    
    const handleSubmit = e =>{
        e.preventDefault();
        firebase.loginUser(email, password)
        .then( user =>{
            setEmail("")
            setPassword("")
            props.history.push(ROUTES.HOME)
        })
        .catch( error =>{
            setError(error)
            setEmail("")
            setPassword("")
        })
        
    }





    return(
        <>
        <Container className="d-flex align-items-center justify-content-center mt-5" style={{ minWidth:"100vh"}}>
          <div className="w-100" style={{ maxWidth:"400px"}}>
          <Card>
          { error !== "" && <span className=" alert alert-danger">{ error.message }</span>}
            <Card.Body>
              <h2 className="text-center mb-4">Connexion</h2>
              <Form onSubmit={ handleSubmit }>
                    <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={ email } onChange={e => setEmail(e.target.value)}  required />
                </Form.Group>
    
                <Form.Group>
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control type="password" value={ password } onChange={ e => setPassword(e.target.value)}  required />
                </Form.Group>
    
                  { btn ? <Button className="w-100" type="submit" >Connexion</Button> : <Button className="w-100" type="submit" disabled >Connexion</Button> }
               
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2 text-light">
            vous voulez vous inscrire ? <Link to="/signup">inscrivez-vous</Link>
          </div>
          </div>
          </Container>
        </>
    )
}

export default SignInPageAdm;