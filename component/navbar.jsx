// import React from "react";

import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Button from "../../component/button.component";


import CustomDropdown from "./dropdown.component";



import Styles from "../css/home.module.css"



function Navmenu() {
  return (
    <>
      <section className="">
    
       <Navbar />
           <Navbar expand="lg" className="sticky-top"  >
           {/* <div className="d-flex justify-content-center align-items-center">
             <img src={Logo} alt=""  style={{width:"80%"}} />
           </div> */}
           
           <Container fluid className={Styles.bg_color}>
             {/* <Navbar.Brand href="#home">  <img src={Logo} alt="" style={{width:"50%"}} /> </Navbar.Brand> */}
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="m-auto">
                 <Nav.Link href="#home" className={Styles.navitems}>
                   হোম
                 </Nav.Link>
                 <Nav.Link href="#link" className={Styles.navitems}>
                   সর্বশেষ
                 </Nav.Link>
                 <Nav.Link href="#link" className={Styles.navitems}>
                   রাজনীতি
                 </Nav.Link>
                 <Nav.Link href="#link" className={Styles.navitems}>
                   অর্থনীতি
                 </Nav.Link>
                 <Nav.Link href="#link" className={Styles.navitems}>
                   জাতীয়
                 </Nav.Link>
                 <Nav.Link href="#link" className={Styles.navitems}>
                   আন্তর্জাতিক
                 </Nav.Link>
                 <Nav.Link href="#link" className={Styles.navitems}>
                   খেলা
                 </Nav.Link>
                 <Nav.Link href="#link" className={Styles.navitems}>
                   বিনোদন
                 </Nav.Link>
                 <Nav.Link href="#link" className={Styles.navitems}>
                   স্বাস্থ্য
                 </Nav.Link>
                 <Nav.Link href="#link" className={Styles.navitems}>
                   প্রযুক্তি
                 </Nav.Link>
                 <Nav.Link href="#link" className={Styles.navitems}>
                   শিক্ষা
                 </Nav.Link>
                 <Nav.Link href="#link" className={Styles.navitems}>
                   চাকরি
                 </Nav.Link>
 
                 {/* <NavDropdown
                   title="অন্যান্য"
                   className={"nav-link"}
                   id="basic-nav-dropdown"
                   style={{color:"#fff"}}
                   
                 >
                   <NavDropdown.Item href="#action/3.1" className="dropdownitems">Action</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2" className="dropdownitems">
                     Another action
                   </NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3" className="dropdownitems">
                     Something
                   </NavDropdown.Item>
                   
                   <NavDropdown.Item href="#action/3.4" className="dropdownitems">
                     Separated link
                   </NavDropdown.Item>
                 </NavDropdown> */}

                 <CustomDropdown /> 

                 
               </Nav>
             </Navbar.Collapse>
           </Container>
         </Navbar>
       
      </section>
    </>
  );
}

export default Navmenu;
