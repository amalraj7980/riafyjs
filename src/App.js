import React,{useEffect, useState}from 'react';
import "./App.css";
import logo from '../src/components/assects/riafy.png'
import { useForm } from './components/custom-hook/useForm';
import TestForm from './components/pages/TestForm';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Counter from './components/pages/Counter';
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs'
const App=()=> {

  useEffect(()=>{
    console.log("running")
  },[])
  return ( <>
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/"><img src={logo}  class="img-responsive" style={{height:40,width:100,borderRadius:8}}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/counter">Features</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <BrowserRouter >
      <Routes>
          <Route path="/testform" element={<TestForm />}/>
          <Route path="/counter" element={<Counter />}/>
          <Route path="/contactus" element={<ContactUs />}/>
          <Route path="/" element={ <Home />}/>
      </Routes>
    </BrowserRouter >
 </> )
}
export default App