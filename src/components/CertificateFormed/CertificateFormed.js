import React, { Component } from 'react'
import "./CertificateFormed.css"
import CertificateData from "../CertificateData/CertificateData"
class CertificateFormed extends Component {
    render() {
        return (
            <div className="cert__done" >
             <CertificateData />
                <h1>Your certificate is ready</h1>
                <img className="certificate" src="Images/certificate-1.jpg"></img>
               
            </div>
        )
    }
}

export default CertificateFormed
