import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import {Link ,useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react"
import NewModal from "./NewModal"
import LoginUser from "./LoginUser"
import { useDispatch} from "react-redux"
import { userActions } from "./store"
import './task.css'



const Login=()=>{
    
    const [users,setUsers] =useState([])
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState(null)
    const [isError,setIsError] = useState(false)
    // const reduxUsers= useSelector(state=>state.user);
    const dispatch = useDispatch();
    useEffect(()=>{
        const savedUsers=localStorage.getItem("loggedInUser")
        if(savedUsers){
            setUsers(JSON.parse(savedUsers))
            dispatch(userActions.addBulkUsers(JSON.parse(savedUsers)))
        }
        
    },[])
    
   
    const usernameChangehandler = (event)=>{
        setUsername(event.target.value)
    }
    const passwordChangeHandler = (event)=>{
        setPassword(event.target.value)
    }
    const setIsErrortofalse=()=>{
        setIsError(false)
    }
    const navigate = useNavigate()
    const submitHandler=(event)=>{
         event.preventDefault();
         if(username.length>2 && password.length>7 ){
            const user={
                username:username,
                password:password
            }
            
            localStorage.setItem("loggedInUser",JSON.stringify(user))
            dispatch(userActions.adduser(user))
            setUsers(user)
            setUsername("")
            setPassword("")
            navigate("/orderfood")
            
        
         }else{
            if(username.length<=0 && password.length<=0 ){
                setIsError(true)
                setError("Please enter the correct value")
            }else if(username.length<3){
                setIsError(true)
                setError("Username cannot be less than 3 character")
            }else if(password.length<8){
                setIsError(true)
                setError("Password cannot be less than 8 character")
         
           }
           
        }
    }
    return(
        
        <div>
            <h1 className="text-primary mt-4 text-center">Login</h1>
          <Form className="loginform" onSubmit={submitHandler}>
            <div className="forminput">
            <FormGroup>
            <Label for="Username">Username</Label>
            <Input type="text" 
            name="Username" 
            id="Username" 
            placeholder="Username" 
            value={username}
            onChange={usernameChangehandler}/>
            </FormGroup>
            <FormGroup>
            <Label for="Password">Password</Label>
            <Input type="password" 
            name="Password" 
            id="Password" 
            placeholder="Password" 
            value={password}
            onChange={passwordChangeHandler}/>
            </FormGroup>
            </div>
            <Button type="submit" color="primary">Login In</Button>
            <div className="ms-3">
            <Link to="/register">Create new Account</Link> 
            </div>
          </Form>
          {isError ? <NewModal error={error} closeError={setIsErrortofalse}/>:""}
          {/* <LoginUser/> */}
        </div>
    )
}
export default Login