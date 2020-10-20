import React, { Component } from 'react'
import "./CertificateFormed.css"
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"
import CertificateData from "../CertificateData/CertificateData"
class CertificateFormed extends Component {

    printDocument=(e)=>{
        const input = document.getElementById('divToPrint');
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            console.log(imgData);
            const pdf = new jsPDF('landscape', 'cm', [35,18]);
            pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;
      }

    render() {
        const {name,body,date,sbody1 ,sbody2 , img}=this.props
        return (
            <div>
           <div id='divToPrint'>
            <div className="pos">
            {/* <h1 className="pos__h1">Your certificate is ready</h1> */}
              <CertificateData name={name} body={body} date={date} sbody1={sbody1} sbody2={sbody2}/>
            <div className="cert__done" style={{backgroundImage: `url(${img})`}} >
                {/* <img className="certificate" src={img}></img> */}
            </div>
            </div>
            </div>
            <div className="mb5">
            <button className="print__btn" onClick={this.printDocument}>Download</button>
            </div>
            </div>
        )
    }
}

export default CertificateFormed
