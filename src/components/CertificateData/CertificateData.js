import React, { Component } from 'react'
import "./CertificateData.css"

 class CertificateData extends Component {
    render() {
        const {name,body,date,sbody1 ,sbody2}=this.props
        return (
            <div className="data">
                {/* <h2>{name}</h2>
                <h1>{date}</h1>
                <p>{body}</p>
                <h2 className="sg1">{sbody1}</h2>
                <h2 className="sg2" >{sbody2}</h2> 
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes b
                */}
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
