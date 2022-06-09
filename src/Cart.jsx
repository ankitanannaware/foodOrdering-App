import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card,CardBody,CardTitle, Button } from 'reactstrap'
import FoodContext from './context'
import FoodDetails from './FoodDetails'
import './task.css'

const Cart=()=>{

    const context = useContext(FoodContext)
    const navigate = useNavigate();
    useEffect(()=>{
        console.log("context created")
    },[context])
    const FoodChangeHandler=(food)=>{
        console.log(food)
        context.onsetSelectedFood(food)  
        navigate("/fooddetails")   
    }
    
    return(
        
        <div>
            <h1 className='text-center mt-4'>FoodItem Added In Cart</h1>
            
            {
               context.foods.length>0 ?
                 <div className='cart'>
                   {
                       context.foods.map((food)=>{
                           return (
                               <div  className="foodcart" key={food.name}>
                                     <Card>
                                        <CardBody>
                                        <CardTitle>Food Item :{food.name}</CardTitle>
                                        <Button color="primary" onClick={() => FoodChangeHandler(food)}>Show Details</Button>
                                        </CardBody>
                                    </Card>
                               </div>
                           )
                       })
                   }
                 </div> 
                 : 
                 <div><h3 className="mt-3 text-danger text-center">No foods added</h3></div>
           }
    
            {/* <FoodDetails/> */}
        </div>
    )
}
export default Cart