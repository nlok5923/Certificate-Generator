import React, { Component } from 'react'
import Images from "../DataFiles/Image"
import Swal from 'sweetalert2'
// import {NavLink} from 'react-router-dom'
import "./CertSelect.css"
import Certificateformed from "../CertificateFormed/CertificateFormed"

 class CertSelect extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              selectedSrc:"Images/blank.jpg",
              choice: "No template chosen"
         }
     }
     ImageSelected =(e) =>{
          this.setState({
              selectedSrc:e.target.src,
              choice:"your choice"
          })
          console.log(e.target.src)
        //  alert(e.target.src)
        //  alert(src);
     }
     handleSubmitDis=(e)=>{
        const {selectedSrc} =this.state
        if(selectedSrc === "Images/blank.jpg")
        {
            Swal.fire(
                'Please select',
                'No template selected',
                'error'
              )
           
        }
        else
        {
            Swal.fire(
                'Good job!',
                'You Selected a nice one',
                'success'
              )
        let k = document.getElementById("handle__dis");
         k.style.display="none";
         let t = document.getElementById("dis__formed");
         t.style.display="block";
        }

     }
     
    render() {
        const {selectedSrc,choice} =this.state
        return (
            <div>
            <div id="handle__dis">
            <div className="cert__selector">
            <div className="cert__holder">
            {
              Images.length? Images.map(image => <div key={image.id}><img src={image.src} onClick={this.ImageSelected} className="adjust__size" alt={image.alt}></img></div>):null
            }
            </div>
            <div className="choice__display">
                <h1>{choice}</h1>
                <img src={selectedSrc} className="display__cert" alt="No Certificate Selected"></img>
                {/* <NavLink to="/Certificateformed"> */}
                <button className="BUTTON_KMY" onClick={this.handleSubmitDis}> Generate</button>
                {/* </NavLink> */}
            </div>
            </div>
            </div>
            <div id="dis__formed">
                <Certificateformed name = {this.props.name} body={this.props.body} date={this.props.date} sbody1={this.props.sbody1} sbody2={this.props.sbody2} img={selectedSrc} />
            </div>
            </div>
        )
    }
}

export default CertSelect





