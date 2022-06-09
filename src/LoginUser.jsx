import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {Button, Card,CardBody,CardTitle} from 'reactstrap'
import { userActions } from './store';

const LoginUser=(props)=>{
  const dispatch= useDispatch();
  useEffect(()=>{
    const savedUsers=localStorage.getItem("loggedInUser")
    dispatch(userActions.loggedInUser(JSON.parse(savedUsers)))

    
},[])
  const loginUserHandler=()=>{
     dispatch(userActions.loggedInUser(props.user.username))
     const localStorageusers = JSON.parse(localStorage.getItem("loggedInUser"))
     const filteredusers = localStorageusers.filter(user => user.username === props.user.username)
     localStorage.setItem("loggedInUser",JSON.stringify(filteredusers))
  }
    return(
       <div className='pt-2'>
         <Card>
           <CardBody>
             <CardTitle> 
             <Button color="danger" onClick={loginUserHandler}>Login User</Button>
             </CardTitle>
           </CardBody>
         </Card>
       </div>
    )
 }
 export default LoginUser