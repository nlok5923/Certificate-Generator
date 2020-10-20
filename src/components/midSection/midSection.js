import React, { Component } from 'react'
import Swal from 'sweetalert2'
// import html2canvas from "html2canvas"
// import { jsPDF } from "jspdf"
//npm install --save html2canvas



// import {NavLink} from 'react-router-dom'
import CertSelect from "../Certselect/CertSelect"
import "./midSection.css"    
// var ind =0;
 class midSection extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"",
             // link:"",
              date:"",
              body:"",
            //   file1:"",
            //   file2:"",
              sbody1:"",
              sbody2:""
         }
   }
   
  // printDocument=(e)=>{
  //   const input = document.getElementById('divToPrint');
  //   html2canvas(input)
  //     .then((canvas) => {
  //       const imgData = canvas.toDataURL('image/png');
  //       const pdf = new jsPDF();
  //       pdf.addImage(imgData, 'JPEG', 0, 0);
  //       // pdf.output('dataurlnewwindow');
  //       pdf.save("download.pdf");
  //     })
  //   ;
  // }




     handleChange =(e)=>{
        this.setState({[e.target.name]:e.target.value})
       // console.log(e.target.value.lastIndexOf(""))

     }
     handleSubmitClick=(e)=>{
        //  let val = document.getElementByClassName("mid__sec");
        //  console.log(val);
       const {name,body,date,sbody1,sbody2} = this.state;
      
       if(name===""||date===""||body===""||sbody1===""||sbody2==="")
       {
        Swal.fire(
            'Fill all fields',
            'error'
          )
           //
       }
       else
       {
        Swal.fire(
            'Good job!',
            'success'
        )
        let k = document.getElementById("mid__sec");
        console.log(k);
        k.style.display="none";
        let t = document.getElementById("dis__certSelect");
        t.style.display="block";
       }
      //   alert("hello");
        //  document.getElementByClassName

     }
 
    //  handlefileChange=(e)=>{
    //      this.setState({[e.target.name]:e.target.files[ind].name})
    //      ind++;
    //        // file2:e.target.files[1].name})
    //      console.log(this.state.file1)
    //  }
    //  handlefile1Change=(e)=>{
    //     this.setState({
    //        //  files[0]:e.target.files[0].name,
    //        //  files[1]:e.target.files[1].name
    //        file2:e.target.files[1].name,
    //       // file2:e.target.files[1].name
    //     })
       
    // }

     submitHandler=(e)=>{
         e.preventDefault();
     }
    render() {
        const {name,body,date,sbody1,sbody2} = this.state;
        return (
            <div> 
            {/* <div className="mb5">
            <button onClick={this.printDocument}>Print</button>
          </div>
            <div id='divToPrint'> */}
            <div id="mid__sec">
            <div>
            <h1>Fill fields accordingly</h1>
            <img src="./Images/certificate-1.jpg" alt="certificate"></img>
           </div> <div className="form__section">
            <form onSubmit={this.submitHandler}>
            <input type="text"  name ="name" placeholder="Enter name" value={name} onChange={this.handleChange} autoComplete="off" required></input><br />
            <input type="text" name="date" value ={date} placeholder="Enter date" onChange={this.handleChange} autoComplete="off" required></input><br />
            <input type="text" name="sbody1" value={sbody1} placeholder="Signatory body 1" onChange={this.handleChange} autoComplete="off" required></input><br />
            <input type="text" name="sbody2" value={sbody2} placeholder="Signatory body 2" onChange={this.handleChange} autoComplete="off" required></input><br />
            <br />
            {/* <label for="file1">Signature of Signatory body 1</label><br />
            <input type="file" className="file" name="file1" value ={file1} onChange={this.handlefileChange}></input><br />
            <img src={file1} alt={file1}></img>
            {/* <h1>{file1}0</h1> */}
            {/* <label for="file1">Signature of Signatory body 1</label><br />
            <input type="file" className="file" name="file2" value ={file2} onChange={this.handlefileChange}></input><br /> */} 
            <textarea name="body" placeholder="Enter body you want" rows="7" cols="58" value={body}  onChange={this.handleChange} autoComplete="off" required></textarea>
            {/* <NavLink to="/CertSelect"> */}
            <button type="submit" onClick={this.handleSubmitClick}>Select Template</button>
            {/* </NavLink> */}
            </form>
            <div className="json__link">
            <h1>OR</h1>
            <input placeholder="Enter json link" type="text" name="link" onChange={this.handleChange}></input>
            </div>
            </div>
            </div>
            <div id="dis__certSelect">
            <CertSelect name ={name}  body={body} date={date} sbody1={sbody1} sbody2 = {sbody2} />
            </div>
            </div>
        )
    }
}

export default midSection
