import React, { Component, useState, Fragment } from 'react'
//import { nanoid } from "nanoid";
import "./App.css";
//import data from "./mock-data.json";
//import ReadOnlyRow from './ReadOnlyRow';
//import EditableRow from './EditableRow';
//import script from './script';
import {ReactDOM} from 'react-dom';
//import  {ProductConsumer} from './Context';
import './FacilityOverview.css';
//import { Button } from '@syncfusion/ej2-buttons';
import { Table,Button, CardColumns,ButtonToolbar, Form } from 'react-bootstrap';
import { AddFacModel } from './AddFacModel';
import { EditFacModel } from './EditFacModel';
import { rowData } from './appData';


//import Auto from './Auto';
//import New from  './New';
//import data from "./data.json";


      class FacilityOverview extends Component {
             
            constructor(props) {
                super(props);
                this.state = {
                    isAvailable: true,
                    numberOfEquipments: 2
                  
                };
                this.state={facs:[],locs:[], addModalShow : false,editModalShow : false}
                this.state = { value: 'Kolkata' };
                this.state = { value: 'ABCPune' };
                this.state = { value: '9AM-10AM' };

                this.handleInputChange = this.handleInputChange.bind(this);
                this.state = { value: 'football' };

                this.handleChange = this.handleChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
            }
           // componentDidMount(){
             //// // this.refreshList();
            //  fetch('https://localhost:44345/api/Values')
             // .then(response =>{
               //  this.setState({
                   //  facs: response.json()
              //    })
               // console.log(response.json())
               // )}
          //  }
          componentDidMount(){
             this.refreshList();
          //  fetch('https://localhost:44345/api/Values')
          //  .then(response =>{
              //  this.setState({
                 //   facs: response.data
              //  })
              //  console.log(response.data)
            //  })
          }
         componentDidMount(){
            fetch('https://localhost:44345/api/Locationss')
            .then(response => response && response.json())
            .then(response => {
                this.setState({locs: response && response});
            }
            )
          }
                    
               // } response && response.json())
             //.then(response => {
             //  this.setState({facs: response && response });
               
               //  })

         //  }
            handleChange(event) {
                this.setState({ value: event.target.value });
            }

            handleSubmit(event) {
                alert('Your Location: ' + this.state.value);
                event.preventDefault();
            };


            handleInputChange(event) {
                const target = event.target;
                const value = target.type === 'checkbox' ? target.checked : target.value;
                const name = target.name;

                this.setState({
                    [name]: value
                });
                function shoot() {
                    alert("Form Submitted!");
                }

                const myelement = (
                    <button onClick={shoot}>Submit!</button>
                );
                function a() {
                    ("#datepicker-13").datepicker();
                    ("#datepicker-13").datepicker("show");
                };
                function myFunction() {
                    window.location.replace("App.js")
                }
            }
            refreshList(){
            
              fetch('https://localhost:44345/api/LocationFacility')
              .then(response => response && response.json())
             .then(response => {
              this.setState({facs: response && response });
               
                })
                
               // this.setState({
                // facs:[{ "id": "1", "facilityid" :"1", "FacilityName":"Eng", "locationid":" 102","IsEnabled":"1"}]
            //  })
        ///// //   }
           // componentDidMount(){
               // this.refreshList();
           }
           componentDidUpdate(){
               this.refreshList();
           }
           deleteFac(facid)
           {
               if(window.confirm('Are you sure?'))
               {
                fetch ('https://localhost:44345/api/Values/'+facid,{
                    method: 'DELETE',
                     headers:{
                         'Accept':'application/json',
                         'Content-Type':'application/json' 
                     }
               })
           }
        }

         
         render() {
             const {facs,locs,facid,facenable,facname,locid} = this.state;
             let addModalClose =() => this.setState({addModalShow : false});
             let editModalClose =() => this.setState({editModalShow : false});
           //  const mystyle = {
               //  color: "pink",
                  // backgroundColor: "DodgerBlue",

                   // padding: "10px",
                  //fontFamily: "Arial"

           //  };
            // const bclick=document.getElementById('btnchk')
          //   let btnAdd = document.querySelector('#btnchk');
           //  let result = document.querySelector("td.td1");
          //   btnAdd.addEventListener('click', ()=>{
               //  let checkbox = document.querySelector('input[type="checkbox"]:checked');
               //  result.innerText = checkbox.value;
           //  })


             
            function shoot() {
               alert("Form Submitted!");
}


              

         
                 
    return (       
              <div>
                        <form >
                        <form  class="frm1">
                            <div  >
                                <h1 class="wrapper">ABC Sports Facility</h1>

                                <div class="tab">
                                    <button > <a href="/UserManagement">User Management</a></button>
                                    <button><a href="/Admin/FacilityModifier">Admin</a></button>
                                    <button><a href="/Home">Home/Booking</a></button>
                                </div>
                            </div>
                            <br></br>
                            <label class="lbl1">
                                Location:
                               
                                <select>
                                  { locs && locs.map(loc => <option value={loc && loc.LOCATIONID}>{ loc && loc.LOCATIONNAME}</option>)}
                                </select>
                            </label>
                           
                            <br></br>
                            <br></br>
                            <h2 class="h2">Facilities Overview</h2>
                            <br></br>
                            <div>
                                <p class="p">
                                    <label for="tags" class="p">Search Facility :  </label>
                                    <input id="tags" autofocus placeholder=" Enter Facility Name" ></input>
                                </p>
                            </div>
                            <br />
                            <br></br>
                            <br></br>
          
                            <Table >
                                <thead>
                                    <tr>
                                         <th></th>
                                         <th>FACILITYID</th>
                                        <th>FACILITYNAME</th>
                                        <th>LOCATION</th>
                                        <th type="hidden"></th>
                                        <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    { facs && facs.map(fac=>
                                    <tr  key={fac.ID && fac.ID}>
                                     <td>{fac && fac.ID}</td>
                                    
                                   <td>{fac && fac.FACILITYID}</td>
                                   
                                     <td>{fac && fac.FACILITYNAME}</td>
                                   
                                  <td>{fac && fac.LOCATIONNAME}</td>
                                    <td type="hidden">{fac && fac.FACILITYENABLED}</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button 
                                            className="mr-2" variant="info"
                                            onClick={()=>this.setState({editModalShow:true,facid :fac && fac.FACILITYID,facname: fac && fac.FACILITYNAME,locid: fac && fac.LOCATIONID})}
                                            > Edit </Button>

                                            <Button
                                            className="mr-2" 
                                            onClick={()=>this.deleteFac(fac && fac.FACILITYID)} 
                                            variant="danger">Delete</Button>
                                            <EditFacModel
                                                show={this.state.editModalShow}
                                                onHide={editModalClose}
                                                facid={facid}
                                                facname={facname}
                                                facenable={facenable}
                                                locid={locid}
                                            />
                                        </ButtonToolbar>
                                    </td>
                                   </tr>
                                    )}  
                                            
                                  
                                </tbody>
                               </Table>
                               <ButtonToolbar>
                                   <Button
                                    variant ='primary'
                                   onClick={()=> this.setState({addModalShow: true})}
                                   >Add Facility
                                   </Button>
                                   <AddFacModel
                                       show={this.state.addModalShow}
                                       onHide={addModalClose}
                                   />

                               </ButtonToolbar>
                
                  
                    <br></br>
                            <br />
                            <br></br>
                            <br></br>
                            <h2 class="h2">Booking Preview</h2>
                            <br></br>

                            <div>
                                <p  >Enter Booking Id : <input type="text" autofocus placeholder=" Enter Booking Id"></input></p>

                                <button><a href="/Home/Booking">Modify Booking</a></button>

                            </div>
                            <br></br>
                            <br />
                           
                        </form>
                  </form>
                 
                  </div>


               
                );
            }
        
       }
      // let btnAdd = document.querySelector("#btnchk");
      // let result = document.querySelector("td.td1");
      // btnAdd.addEventListener('click', ()=>{
         //  let checkbox = document.querySelector('input[type="checkbox"]:checked');
          // result.innerText = checkbox.value;
        // })
   
      
 //}


//ReactDOM.render(
  // <FacilityOverview />,
  //document.getElementById('root')
//);

   

export default FacilityOverview