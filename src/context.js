import React from 'react'
const FoodContext = React.createContext({
    foods:[],
    onsetFoods:()=>{},
    selectedFood:{},
    onsetSelectedFood:()=>{}
})
export default FoodContext