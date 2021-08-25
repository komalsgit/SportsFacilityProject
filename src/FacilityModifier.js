import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom';
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import './FacilityModifier.css';
import { AddSportModal } from './AddSportModal';
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import FacilityOverview from './FacilityOverview';
import { EditTimeSlot } from './EditTimeSlot';
import { AddEquipmentModel } from './AddEquipmentModel';
//import {GlobalFilter} from './GlobalFilter';

//import data from "./data.json";
class FacilityModifier extends Component {

    
    //class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAvailable: true,
            numberOfEquipments: 2,
            searchTerm:'',
            searchTerm1:'',
            
           
        };
        this.state = { sports: [], equipments: [], locs: [],sportse:[], addSModalShow: false, editSModalShow: false, addPModalShow: false }
        this.state = { value: 'Kolkata' };
        this.state = { value: 'ABCPune' };
        this.state = { value: '9AM-10AM' };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = { value: 'football' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.refreshList();
    }
    componentDidMount() {
        fetch('https://localhost:44345/api/Locationss')
            .then(response => response && response.json())
            .then(response => {
                this.setState({ locs: response && response });
            }
            )
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
   
    refreshList() {

        fetch('https://localhost:44345/api/Sports')
            .then(response => response && response.json())
            .then(response => {
                this.setState({ sports: response && response });


                fetch('https://localhost:44345/api/EquipmentSport')
                    .then(response => response.json())
                    .then(data => {
                        this.setState({ equipments: data })
                        
                    });
            })
    }
    componentDidUpdate() {
        this.refreshList();
    }
    handleSubmit(event) {
        // alert('Your favorite flavor is: ' + this.state.value);
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
    deleteFac(spid) {
        if (window.confirm('Are you sure?')) {
            fetch('https://localhost:44345/api/TimeSlots/' + spid, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    sendid(FID){
      //  fetch ('https://localhost:44345/api/SportfromFacility/{FID}'+ FID)
        fetch ('https://localhost:44345/api/SportfromFacility/getSportsParamTotal/' + FID)
        .then(response => response.json())
        .then(data => {
          this.setState({sportse:data})
      }); 
       }

    render() {
       
        const { sports,equipments, locs, slotname, sportid, slotenable,sportse, slotid,setSearchTerm,searchTerm } = this.state;
        let addSModalClose = () => this.setState({ addSModalShow: false });
        let editSModalClose = () => this.setState({ editSModalShow: false });
        let addPModalClose = () => this.setState({ addPModalShow: false });
        const mystyle = {
            color: "pink",
            backgroundColor: "DodgerBlue",

            padding: "10px",
            fontFamily: "Arial"

        };



        function shoot() {
            alert("Form Submitted!");
        }
       // function GlobalFilter(){
         //   const[searchTerm, setSearchTerm]=useState("");
       //  }
       
        





        return (
          

            <form class="frm1">
                <link href="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css"
                    rel="stylesheet" />
                <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
                <script src="https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>

                <form >
                    <div  >
                        <h1 class="wrapper">ABC Sports Facility</h1>

                        <div class="tab">
                            <button > <a href="UserManagement">User Management</a></button>
                            <button><a href="admin/FacilityModifier">Admin</a></button>
                            <button><a href="Home">Home/Booking</a></button>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <label class="lbl1">
                        Location:

                        <select>
                            {locs && locs.map(loc => <option value={loc && loc.LOCATIONID}>{loc && loc.LOCATIONNAME}</option>)}
                        </select>
                    </label>

                    <br></br>
                    <br></br>
                    <br></br>
                    <h2 class="h2">Facility Modifier</h2>
                    <br></br>

                    <form onSubmit={this.handleSubmit}>
                        <table><tr>
                            <th> Facility Name : </th>
                            <td>
                                <label class="lbl2">

                                    <select value={this.state.value} onChange={this.handleChange}>
                                        <option value="ABCPune">ABCPune</option>
                                        <option value="PQRMumbai">PQRMumbai</option>
                                        <option value="OPSDelhi">OPSDelhi</option>
                                        <option value="BWKolkata">BWKolkata</option>
                                    </select>
                                </label>
                                <br />               </td>
                        </tr>
                            <tr>
                                <th>Address</th>
                                <td>Chennai</td>

                            </tr>

                            <tr>
                                <th>Location</th>
                                <td>ABC Chennai</td>
                            </tr>
                            <tr>
                                <th>Bookings Enabled:</th>
                                <td>
                                    <label class="lbl2">
                                        <input
                                            name="isAvailable"
                                            type="checkbox"
                                        />
                                    </label>
                                </td>
                            </tr>
                        </table>
                        <br></br>
                        <h2 class="h2">Sport Management</h2>
                        <br></br>
                     
                    
                           Sport Name : <input type ="text" placeholder="Search..."
                            onChange={(event)=> {
                                this.setState({searchTerm1 : event.target.value})
                            }}
                            /> 
                            <br></br>
                           <Table>
                            <thead>
                                <tr>
                                   
                                    <th>SportName</th>
                                    <th>Equipments</th>
                                    <th>Slots</th>
                                    <th>Facility</th>
                                    <th>Location</th>
                                   
                                </tr>
                                </thead>
                                </Table>
                                 { sports && sports.filter((val) => {
                          if (val && val.SPORTNAME.includes(this.state.searchTerm1)){
                                return val
                            }
                            else if(this.state.searchTerm1 == "") {
                                return null
                                }
                                else {
                                    return null
                                }
      })
                        .map((val,key) => {
                            return (
                                <Table>
                                     <thead>
                                <tr>
                                    
                                    
                                   
                                </tr>
                                </thead>
                                <tbody>
                                <tr key={key}>
                               
                                <td>{val && val.SPORTNAME}</td>
                                <td>{val && val.EQUIPMENTNAME}</td>
                                <td>{val && val.TIMESLOT}</td>
                                <td>{val && val.FACILITYNAME}</td>
                                <td>{val && val.LOCATIONNAME}</td>
                                <td>
                                            <ButtonToolbar>
                                                <Button
                                                    className="mr-2" variant="info"
                                                    onClick={() => this.setState({ editSModalShow: true, slotid: val && val.TIMESLOTID, slotname: val && val.TIMESLOT, sportid: val && val.SPORTSID })}
                                                >Edit  </Button>


                                                <Button
                                                    className="mr-2"
                                                    onClick={() => this.deleteFac(val && val.SPORTID)}
                                                    variant="danger">Delete</Button>
                                                <EditTimeSlot
                                                    show={this.state.editSModalShow}
                                                    onHide={editSModalClose}
                                                    slotid={slotid}
                                                    slotname={slotname}
                                                    sportid={sportid}

                                                />
                                            </ButtonToolbar>
                                        </td>
                                </tr>
                             </tbody>
                         
                             </Table>
          )} )}
                         
                 
                 
                 
                 
                 
                 
                 
                 
                      Facility Name :<input type ="text" placeholder="Search..."
                      onChange={(event)=> {
                          this.setState({searchTerm : event.target.value})
                      }}
                      /> 
                 
                 
                       { sports && sports.filter((val) => {
                           // if(this.state.searchTerm == "a") {
                              //  return val
                           // }
                          // if(this.state.searchTerm == ("BADMINTON")){
                            //val && val.sports && sports && sports.SPORTNAME){
                           if (val && val.FACILITYNAME.includes(this.state.searchTerm)){
                             return val
                         }
                           // else if (val && val.sports && sports.SPORTNAME.includes(this.state.searchTerm)){
                              //  return val
                           else if(this.state.searchTerm == "") {
                             return 0
                           }
                           
                      })
                      .map((val,key) =>{
                          return (
                                <Table>
                                <thead>
                                <tr>
                                  
                                    <th>Facility</th>
                                    <th>SportName</th>
                                    <th>Equipments</th>
                                    <th>Slots</th>
                                    <th>Location</th>
                                   
                            </tr>
                            </thead>
                            <tbody>
                            <tr key={key}>
                                    
                                        <td>{val && val.FACILITYNAME}</td>
                                        <td>{val && val.SPORTNAME}</td>
                                        <td>{val && val.EQUIPMENTNAME}</td>
                                        <td>{val && val.TIMESLOT}</td>
                                        <td>{val && val.LOCATIONNAME}</td>
                                        <td>
                                            <ButtonToolbar>
                                                <Button
                                                    className="mr-2" variant="info"
                                                    onClick={() => this.setState({ editSModalShow: true, slotid: val && val.TIMESLOTID, slotname: val && val.TIMESLOT, sportid: val && val.SPORTSID })}
                                                >Edit  </Button>


                                                <Button
                                                    className="mr-2"
                                                    onClick={() => this.deleteFac(val && val.SPORTID)}
                                                    variant="danger">Delete</Button>
                                                <EditTimeSlot
                                                    show={this.state.editSModalShow}
                                                    onHide={editSModalClose}
                                                    slotid={slotid}
                                                    slotname={slotname}
                                                    sportid={sportid}

                                                />
                                            </ButtonToolbar>
                                        </td>
                                        </tr>
                                        </tbody>
                            </Table>
                        )
                          })//.map((val, key) =>{
                           // return (
                              //  <div key={key}>
                               //     <p>{val && val.SPORTNAME}</p>
                               // </div>
                          //  )
                       // })
                   }
                  
                    
                        
                           
                           
                           <Table>
                        <thead>
                                <tr>
                                    <th>SportId</th>
                                    <th>SportName</th>
                                    <th>Equipments</th>
                                    <th>Slots</th>
                                    <th>Facility</th>
                                    <th>Location</th>
                                    <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {sports && sports.map(sport =>
                                    <tr key={sport.SPORTID && sport.SPORTID}>

                                        <td>{sport && sport.SPORTID}</td>
                                        <td>{sport && sport.SPORTNAME}</td>
                                        <td>{sport && sport.EQUIPMENTNAME}</td>
                                        <td>{sport && sport.TIMESLOT}</td>


                                        <td type="hidden">{sport && sport.FACILITYNAME}</td>
                                        <td type="hidden">{sport && sport.LOCATIONNAME}</td>
                                        <td>
                                            <ButtonToolbar>
                                                <Button
                                                    className="mr-2" variant="info"
                                                    onClick={() => this.setState({ editSModalShow: true, slotid: sport && sport.TIMESLOTID, slotname: sport && sport.TIMESLOT, sportid: sport && sport.SPORTSID })}
                                                >Edit  </Button>


                                                <Button
                                                    className="mr-2"
                                                    onClick={() => this.deleteFac(sport && sport.SPORTID)}
                                                    variant="danger">Delete</Button>
                                                <EditTimeSlot
                                                    show={this.state.editSModalShow}
                                                    onHide={editSModalClose}
                                                    slotid={slotid}
                                                    slotname={slotname}
                                                    sportid={sportid}

                                                />
                                            </ButtonToolbar>
                                        </td>
                                    </tr>)}
                            </tbody>
                        </Table>
                        
               
                        <br />

                        <ButtonToolbar>
                            <Button
                                variant='primary'
                                onClick={() => this.setState({ addSModalShow: true })}
                            >Add Sport
                            </Button>
                            <AddSportModal
                                show={this.state.addSModalShow}
                                onHide={addSModalClose}
                            />

                        </ButtonToolbar>
                        <br />
                        <Table>
                            <thead>
                                <tr>
                                    
                                    <th>EquipmentName</th>
                                    <th>SportName</th>
                                     <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {equipments && equipments.map(eq =>
                                    <tr key={eq.EQUIPMENTID && eq.EQUIPMENTID}>

                                        <td>{eq && eq.EQUIPMENTNAME}</td>
                                      <th>{eq && eq.SPORTNAME}</th>
                                        <td>
                                            <ButtonToolbar>
                                                   <Button
                                                    className="mr-2"
                                                    onClick={() => this.deleteFac(eq && eq.EQUIPMENTID)}
                                                    variant="danger">Delete</Button>
                                            </ButtonToolbar>
                                        </td>
                                    </tr>)}
                            </tbody>
                        </Table>

                        <ButtonToolbar>
                            <Button
                                variant='primary'
                                onClick={() => this.setState({ addPModalShow: true })}
                            >Add Equipment
                            </Button>
                            <AddEquipmentModel
                                show={this.state.addPModalShow}
                                onHide={addPModalClose}
                            />

                        </ButtonToolbar>
                        <br />

                        <br></br>
                        <h2 class="h2">Booking Management</h2>
                        <br></br>
                        <div>
                            <p class="p">Enter Date: <DatePickerComponent></DatePickerComponent></p>
                            <br />
                            <br></br>
                            <label class="lbl3">
                                Select Sport:
                                <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="football">football</option>
                                    <option value="BasketBall">BasketBall</option>
                                    <option value="BaseBall">BaseBall</option>
                                    <option value="Tennis">Tennis</option>
                                </select>
                            </label>
                        </div>
                        <br></br>
                        <br />
                        <table>
                            <thead>
                                <tr>
                                    <th>Slots</th>
                                    <th>9AM-10AM</th>
                                    <th>10AM-11AM</th>
                                    <th>11AM-12PM</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th>Status</th>
                                    <td>Booked</td>
                                    <td>Booked</td>
                                    <td><button onClick="myFunction()"><a href="/Home">Available</a></button></td>
                                </tr>


                            </tbody>
                        </table>
                        <Table>
                        <thead>
                                <tr>
                                    <th>SportId</th>
                                    <th>SportName</th>
                                    <th>Equipments</th>
                                    <th>Slots</th>
                                    <th>Facility</th>
                                    <th>Location</th>
                                    <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {sports && sports.map(sport =>
                                    <tr key={sport.SPORTID && sport.SPORTID}>

                                        <td>{sport && sport.SPORTID}</td>
                                        <td>{sport && sport.SPORTNAME}</td>
                                        <td>{sport && sport.EQUIPMENTNAME}</td>
                                        <td>{sport && sport.TIMESLOT}</td>


                                        <td type="hidden">{sport && sport.FACILITYNAME}</td>
                                        <td type="hidden">{sport && sport.LOCATIONNAME}</td>
                                        <td>
                                            <ButtonToolbar>
                                                <Button
                                                    className="mr-2" variant="info"
                                                    onClick={() => this.setState({ editSModalShow: true, slotid: sport && sport.TIMESLOTID, slotname: sport && sport.TIMESLOT, sportid: sport && sport.SPORTSID })}
                                                >Edit  </Button>


                                                <Button
                                                    className="mr-2"
                                                    onClick={() => this.deleteFac(sport && sport.SPORTID)}
                                                    variant="danger">Delete</Button>
                                                <EditTimeSlot
                                                    show={this.state.editSModalShow}
                                                    onHide={editSModalClose}
                                                    slotid={slotid}
                                                    slotname={slotname}
                                                    sportid={sportid}

                                                />
                                            </ButtonToolbar>
                                        </td>
                                    </tr>)}
                            </tbody>
                        </Table>


                    </form>
                </form>
            </form>


        );
    }
}



ReactDOM.render(
    <FacilityModifier />,
    document.getElementById('root')
);




export default FacilityModifier