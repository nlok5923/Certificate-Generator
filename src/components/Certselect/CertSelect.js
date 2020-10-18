import React, { Component } from 'react'
import Images from "../DataFiles/Image"
import {NavLink} from 'react-router-dom'
import "./CertSelect.css"

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
     
    render() {
        const {selectedSrc} =this.state
        return (
            <div>
            <div className="cert__selector">
            <div className="cert__holder">
            {
              Images.length? Images.map(image => <div key={image.id}><img src={image.src} onClick={this.ImageSelected} className="adjust__size" alt={image.alt}></img></div>):null
            }
            </div>
            <div className="choice__display">
                <h1> Your choice</h1>
                <img src={selectedSrc} className="display__cert" alt="no image selected"></img>
                <NavLink to="/Certificateformed">
                <button className="BUTTON_KMY">Generate</button>
                </NavLink>
            </div>
            </div>
            </div>
        )
    }
}

export default CertSelect





