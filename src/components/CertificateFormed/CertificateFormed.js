import React, { Component } from 'react'
import "./CertificateFormed.css"
import CertificateData from "../CertificateData/CertificateData"
class CertificateFormed extends Component {
    render() {
        const {name,body,date,sbody1 ,sbody2 , img}=this.props
        return (
            <div>
              <h1>Your certificate is ready</h1>
              <CertificateData name={name} body={body} date={date} sbody1={sbody1} sbody2={sbody2}/>
            <div className="cert__done" style={{backgroundImage: `url(${img})`}} >
            
              
                {/* <img className="certificate" src={img}></img> */}
            </div>
            </div>
        )
    }
}

export default CertificateFormed
