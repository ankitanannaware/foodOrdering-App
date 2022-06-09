import { useContext } from "react";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import './task.css'


import FoodContext from "./context";

const FoodDetails=()=>{
    const context=useContext(FoodContext)
    
    return(
        <div>
            
            { context.selectedFood.name &&
                <div className="fooddetails">
                    <Card>
                        <CardBody>
                        <CardTitle className="text-primary">SHOW DETAILS</CardTitle>
                        <CardSubtitle>Food Item: {context.selectedFood.name}</CardSubtitle>
                        </CardBody>
                    </Card>
            </div>
            }
            
        </div>
    )
}
export default FoodDetails;