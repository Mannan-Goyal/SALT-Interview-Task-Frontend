import React from 'react';
import { useState, useEffect } from 'react';
import { protectedData } from '../../api/Request';
import "./styles.css";
import { useSearchParams } from 'react-router-dom';


const fillerFunction = () => {
  localStorage.clear(); 
  window.location.href='http://localhost:5000';
}

const LoggedInUser = () => {
  return <div>
     <h1>Welcome back! </h1>
     <button onClick={fillerFunction}>Log out </button>
   </div>;
}

const LoggedOutUser = () => {
  return <div>
     <h1>Please Sign In! </h1>
     <a href="http://localhost:5000/login">Sign In </a>
   </div>;
}




const Home = () => {
  const [data, setData] = useState();
  const [searchParams] = useSearchParams();
  if(searchParams.has('token')){
    localStorage.setItem('jwtToken', searchParams.get("token"));
  }
  const getData = async () => {
    let res = await protectedData();
    setData(res);
  }
  useEffect(() => {
    getData();
  }, []);
  if (data) {
    return <LoggedInUser />;
  }
  else{
    return <LoggedOutUser />
  }
}

export default Home;
