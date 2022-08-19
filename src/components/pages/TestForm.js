import React,{useEffect, useState}from 'react'
import { useForm } from '../custom-hook/useForm';
import Counter  from './Counter';
const TestForm=()=> {
  const [value  ,handleChange ]=useForm({
    name:"",
    email:"",
    password:"",
    Cpassword:"",
  });
const read=()=>{
  console.log("hello")
}
  useEffect(()=>{
    // read();
    console.log("running")
  },[value.name,value.email],console.log(value,"value"))
  return (  
    <div>
        <form action="" autoComplete="off">
            <input type="text" name="name" value={value.name} onChange={handleChange} /><br/>
            <input type="email" name="email" value={value.email} onChange={handleChange} /><br/>
            <input type="password" name="password" value={value.password} onChange={handleChange} /><br/>
            <input type="password" name="Cpassword" value={value.Cpassword} onChange={handleChange} />

        </form>
        <Counter/>
    </div>
  )
}
export default TestForm