
import { Provider } from 'react-redux';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import Cart from './Cart';
import FoodDetails from './FoodDetails';
import Header from './Header';
import Home from './Home';
import Login from './Login'
import Register from './Register'
import OrderFood from './OrderFood'
import store from './store';
import FoodContext from './context';
import { useState } from 'react';
import NotFound from './NotFound'



function App() {
  const [foods,setFoods] = useState([])
  const [selectedFood,setSelectedFood] =useState({})
  const onChangeFoods = (foods)=>{
    setFoods(foods)
  }
  const onChangeSelectedFood =(foods)=>{
    setSelectedFood(foods)
  }
  return (
    <BrowserRouter>
      <Provider store={store}>
        <FoodContext.Provider value={{
            foods:foods,
            onsetFoods:onChangeFoods,
            selectedFood:selectedFood,
            onsetSelectedFood:onChangeSelectedFood
        }}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Header/>}></Route>
              <Route path="/home" element={<Home/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/register" element={<Register/>}></Route>
              <Route path="/orderfood" element={<OrderFood/>}></Route>
              <Route path="/cart" element={<Cart/>}></Route>
              <Route path="/fooddetails" element={<FoodDetails/>}></Route>
              <Route path="*" element={<NotFound/>}></Route>
              
            </Routes>
            
          
          </div>
          </FoodContext.Provider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
