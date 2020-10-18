import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import "./midSection.css"    
// var ind =0;
 class midSection extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"",
              link:"",
              date:"",
              body:"",
              file1:"",
              file2:"",
              sbody1:"",
              sbody2:""
         }
     }
     handleChange =(e)=>{
        this.setState({[e.target.name]:e.target.value})
       // console.log(e.target.value.lastIndexOf(""))

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
        const {name,score,link,file1,file2,body,date,sbody1,sbody2} = this.state;
        return (
            <div className="mid__sec">
            <div>
            <h1>Fill fields accordingly</h1>
            <img src="./Images/certificate-1.jpg"></img>
           </div> <div className="form__section">
            <form onSubmit={this.submitHandler}>
            <input type="text"  name ="name" placeholder="Enter name" value={name} onChange={this.handleChange}></input><br />
            <input type="text" name="date" value ={date} placeholder="Enter date" onChange={this.handleChange}></input><br />
            <input type="text" name="sbody1" value={sbody1} placeholder="Signatory body 1" onChange={this.handleChange}></input><br />
            <input type="text" name="sbody2" value={sbody2} placeholder="Signatory body 2" onChange={this.handleChange}></input><br />
            <br />
            {/* <label for="file1">Signature of Signatory body 1</label><br />
            <input type="file" className="file" name="file1" value ={file1} onChange={this.handlefileChange}></input><br />
            <img src={file1} alt={file1}></img>
            {/* <h1>{file1}0</h1> */}
            {/* <label for="file1">Signature of Signatory body 1</label><br />
            <input type="file" className="file" name="file2" value ={file2} onChange={this.handlefileChange}></input><br /> */} 
            <textarea name="body" placeholder="Enter body you want" rows="7" cols="43" value={body}  onChange={this.handleChange} ></textarea>
            <NavLink to="/CertSelect">
            <button type="submit">Select Template</button>
            </NavLink>
            </form>
            <div className="json__link">
            <h1>OR</h1>
            <input type="text" name="link" value={link} onChange={this.handleChange}></input>
            </div>
            </div>
            </div>
        )
    }
}

export default midSection
