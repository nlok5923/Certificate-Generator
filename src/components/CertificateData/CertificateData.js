import React, { Component } from 'react'
import "./CertificateData.css"

 class CertificateData extends Component {
    render() {
        const {name,body,date,sbody1 ,sbody2}=this.props
        return (
            <div className="data">
                <h2 className="name">{name}</h2>
                <h1 className="date">{date}</h1>
                <p>{body}</p>
                <h2 className="sg1">{sbody1}</h2>
                <h2 className="sg2" >{sbody2}</h2>
             </div>
        )
    }
}

export default CertificateData
