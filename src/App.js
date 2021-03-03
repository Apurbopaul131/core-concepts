import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import userEvent from '@testing-library/user-event';

function App() {
  const productName = [{name:"Shirt",price:"$500"},{name:"pant",price:"$600"},{name:"juta",price:"$700"}];
  const shoppingProduct =[{name:"Watch",price:"$800"},{name:"Laptop",price:"$7000"},{name:"phone",price:"$5000"},{name:"Iphone",price:"$1000"}];
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {productName.map(pd =><li>{pd.name}</li>)}
        </ul>
        {shoppingProduct.map(sp => <Shopping name={sp.name} price={sp.price}></Shopping>)}
       {productName.map(product => <Products name={product.name} price={product.price}></Products>)}
       <Users></Users>
       <Posts></Posts>
       
       
        
      </header>
    </div>
  );
}

function Products(props){
 
  const productStyle = {
    backgroundColor:"blue",
    border:"2px solid gray",
    borderRadius:"10px",
    height:"200px",
    width:"200px"
    
    
  }
  // const {name,price} = props.design;
  // console.log(name);
  return (<div style={productStyle}>
    <h3>{props.name}</h3>
    <h5 style={{color:"red"}}>{props.price}</h5>
    <button style ={{border:"1px solid black",borderRadius:"5px",backgroundColor:"green",padding:"5px"}}>Buy now</button>
  </div>)
}
function Shopping(props){
  const shoppingStyle ={
    border:"1px solid red",
    borderRadius:"10px",
    backgroundColor:"green"
  }
  return (<div style={shoppingStyle}>
     <h3>{props.name}</h3>
     <h5>{props.price}</h5>
     <button style={{border:"1px solid black",borderRadius:"5px",backgroundColor:"blue",padding:"5px"}}>buy Now</button>
  </div>);
}

function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  },[])
  // console.log(users);
  return (<div>
            
           <h3> Dynamic users: {users.length}</h3>
          <ul>
            {
              users.map(user => <li>{user.name}</li>)
            }
          </ul>
             </div>);
}
function Posts(){
  const [posts,setPosts] = useState([])
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
     .then(data => setPosts(data))
  },[])
  return(<div>
    <h3> Dynamic data:{posts.length}</h3>
    <ul>
      {posts.map(p =><li>{p.title}</li>)}
    </ul>
  </div>)
}

export default App;

