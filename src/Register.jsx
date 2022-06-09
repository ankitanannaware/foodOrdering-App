import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import { useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react"
import NewModal from "./NewModal"
import { useDispatch, useSelector } from "react-redux"
import { userActions } from "./store"
import RegisterUser from  './RegisterUser'


const Register=()=>{
    const [users,setUsers] =useState([])
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phonenumber,setPhonenumber] = useState("")
    const [error,setError] = useState(null)
    const [isError,setIsError] = useState(false)
    const reduxUsers= useSelector(state=>state.user);
    const dispatch = useDispatch();
    useEffect(()=>{
        const savedUsers=localStorage.getItem("users")
        setUsers(JSON.parse(savedUsers))
        dispatch(userActions.addBulkUsers(JSON.parse(savedUsers)))
        
    },[])
    
    const usernameChangeHandler = (event)=>{
        setUsername(event.target.value)
    }
    const emailChangeHandler = (event)=>{
        setEmail(event.target.value)
    }
    const passwordChangeHandler = (event)=>{
        setPassword(event.target.value)
    }
    const phonenumberChangeHandler = (event)=>{
        setPhonenumber(event.target.value)
    }
    const setIsErrortofalse=()=>{
        setIsError(false)
    }
    const isUserUnique=()=>{
        if(reduxUsers.users.length>0){
            const foundUser=reduxUsers.users.filter((user)=>{
                return user.username == username
            })
            console.log("found User",foundUser)
            if(foundUser.length>0){
                setIsError(true)
                setError("User is not Unique")
                return false
            }
            else{
                return true
            }
        }
        return true
  
    }
    const navigate= useNavigate();
    const submitHandler = (event)=>{
        event.preventDefault()
        if(username.length>2 && password.length>7 && phonenumber>10 && isUserUnique()){
            const user={
                username:username,
                email:email,
                password:password,
                phonenumber:phonenumber
            }
            fetch("/register",{
                method:"POST",
                body:JSON.stringify(user)
            }).then((res)=>{
                return res.json()
            }).then((res)=>{
                console.log("response",res)
            })
            localStorage.setItem("users",JSON.stringify([...users,user]))
            dispatch(userActions.adduser(user))
            setUsers([...users,user])
            setUsername("")
            setPassword("")
            setEmail("")
            setPhonenumber("")
            navigate("/login")
        }else{
            if(username.length<=0 && password.length<=0 && email.length<=0 && phonenumber<=0){
                setIsError(true)
                setError("Please enter the correct value")
            }else if(username.length<3){
                setIsError(true)
                setError("Username cannot be less than 3 character")
            }else if(password.length<8){
                setIsError(true)
                setError("Password cannot be less than 8 character")
            }else if(phonenumber<10){
                setIsError(true)
                setError("Phonenumber cannot be less than 10 character")
            }
        }   
    }
    return(
        <div>
            <h1 className="text-primary mt-4 text-center">Register Form</h1>  
          <Form className="registerform" onSubmit={submitHandler}>
          <div className="forminput">
            <FormGroup>
            <Label for="Username">Username</Label>
            <Input type="text" 
            name="Username" 
            id="Username" 
            placeholder="Username" 
            value={username}
            onChange={usernameChangeHandler}/>
            </FormGroup>
            <FormGroup>
            <Label for="Email">Email</Label>
            <Input type="email" 
            pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
            name="Email" 
            id="Email" 
            placeholder="Email"
            value={email} 
            onChange={emailChangeHandler}/>
            </FormGroup>
            <FormGroup>
            <Label for="Password">Password</Label>
            <Input type="Password" 
            name="Password" 
            id="Password" 
            placeholder="Password" 
            value={password}
            onChange={passwordChangeHandler}/>
            </FormGroup>
            <FormGroup>
            <Label for="Phone Number">Phone Number</Label>
            <Input type="number" 
            name="Phone Number" 
            id="Phone Number" 
            placeholder="Phone Number"
            value={phonenumber}
            onChange={phonenumberChangeHandler} />
            </FormGroup>
            </div>
            <Button type="submit" color="primary">Submit</Button>
          </Form>
          {isError ? <NewModal error={error} closeError={setIsErrortofalse}/>:""}
          {
           reduxUsers.users.map(()=>{
              return(
               <RegisterUser/>
              )
           })
        }
        </div>
    )
}
export default Register