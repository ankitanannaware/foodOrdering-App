import pic1 from './images/1.jpg'
import pic2 from './images/2.jpg'
import pic3 from './images/3.jpg'
import pic4 from './images/4.jpg'
import pic5 from './images/5.jpg'
import pic6 from './images/6.jpg'
import Layout2 from "./Layout 2"
import './task.css'
import { Card, CardImg,CardBody,CardTitle, Button, Form, Input, Label } from 'reactstrap';
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import FoodContext from './context'
const OrderFood=()=>{
    const context = useContext(FoodContext)
    const [fooditem,setFooditem] = useState("")
    const [foods,setFoods] = useState([])
    const food=[{
        img:pic1,
        name:"DeliciousCake"
    },
{
    img:pic2,
    name:"pastry"
},
{
    img:pic3,
    name:"Pizza"  
},
{
    img:pic4,
    name:"Paneer"
},
{
    img:pic5,
    name:"Chiken Biryani"
},
{
    img:pic6,
    name:"Burger"
}]
    const navigate = useNavigate();

    const isFoodnameUnique=(name)=>{
        if(context.foods.length>0){
            const foundFood=context.foods.filter((food)=>{
                return food.name ===  name
            })
            console.log("found food",foundFood)
            if(foundFood.length>0){
                return false
            }
            else{
                return true
            }
        }
        return true
  
    }
    
    const orderHandler=(food)=>{
        if(food && isFoodnameUnique(food.name)){
            
            setFoods([...foods,food])
            context.onsetFoods([...foods,food])
            setFooditem("")
        }
        
        navigate("/cart")
    }
    
    const addfoodHandler=(event)=>{
        setFooditem(event.target.value)
        console.log("add")

    } 
    return(
        <Layout2>
        <div>
          <div className='container' >
          {
              food.map(food=>{
                  return (<Card className='card1'>
                  <CardImg src={food.img} alt="Cake" width="200px" height="200px" />
                  <CardBody>
                  <CardTitle className='text1'>{food.name}</CardTitle>
                  <Button onClick={()=>orderHandler(food)} color="primary">Order Now</Button>
                  </CardBody>
              </Card>) 
              })
          }  
          </div>
        </div>
        </Layout2>
    )
}
export default OrderFood