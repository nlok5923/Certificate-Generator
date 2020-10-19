import React, { Component } from 'react'
import Images from "../DataFiles/Image"
// import {NavLink} from 'react-router-dom'
import "./CertSelect.css"
import Certificateformed from "../CertificateFormed/CertificateFormed"

 class CertSelect extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              selectedSrc:""
         }
     }
     ImageSelected =(e) =>{
          this.setState({
              selectedSrc:e.target.src
          })
          console.log(e.target.src)
        //  alert(e.target.src)
        //  alert(src);
     }
     handleSubmitDis=(e)=>{
         let k = document.getElementById("handle__dis");
         k.style.display="none";
         let t = document.getElementById("dis__formed");
         t.style.display="block";

     }
     
    render() {
        const {selectedSrc} =this.state
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
                <h1> Your choice</h1>
                <img src={selectedSrc} className="display__cert" alt="Certificate"></img>
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





