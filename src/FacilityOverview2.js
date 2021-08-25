import React, { Component, useState, Fragment } from 'react'
//import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import ReactDOM from 'react-dom';
import './FacilityOverview.css';
//import Auto from './Auto';
//import New from  './New';
//import data from "./data.json";


        class FacilityOverview extends Component {



            //class Reservation extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    isAvailable: true,
                    numberOfEquipments: 2
                };
                this.state = { value: 'Kolkata' };
                this.state = { value: 'ABCPune' };
                this.state = { value: '9AM-10AM' };

                this.handleInputChange = this.handleInputChange.bind(this);
                this.state = { value: 'football' };

                this.handleChange = this.handleChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
            }
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
         render() {
             const mystyle = {
                 color: "pink",
                   backgroundColor: "DodgerBlue",

                   // padding: "10px",
                  //fontFamily: "Arial"

             };


              return(
               function shoot() {
                 alert("Form Submitted!");
}
              )
/*const FacilityOverview = () => {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        facilityid: "",
        facilityname: "",
        address: "",
        location: "",
    });

    const [editFormData, setEditFormData] = useState({
        facilityid: "",
        facilityname: "",
        address: "",
        location: "",
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {

            facilityid: addFormData.facilityid,
            facilityname: addFormData.facilityname,
            address: addFormData.address,
            location: addFormData.location,
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            facilityid: editFormData.facilityid,
            facilityname: editFormData.facilityname,
            address: editFormData.address,
            location: editFormData.location,
        };

        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === editContactId);

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            facilityid: contact.facilityid,
            facilityname: contact.facilityname,
            address: contact.address,
            location: contact.location,
        };

        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);
    };
      
   
           
                 */ return (
                

                  
                          <form>
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
                                <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="Pune">Pune</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Kolkata">Kolkata</option>
                                </select>
                            </label>
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

                            <table>
                                <thead>
                                    <tr>
                                        <th>FacilityId</th>
                                        <th>FacilityName</th>
                                        <th>Address</th>
                                        <th>Location</th>
                                        <th>IsEnabled</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contacts.map((contact) => (
                                        <Fragment>
                                            {editContactId === contact.id ? (
                                                <EditableRow
                                                    editFormData={editFormData}
                                                    handleEditFormChange={handleEditFormChange}
                                                    handleCancelClick={handleCancelClick}
                                                />
                                            ) : (
                                                <ReadOnlyRow
                                                    contact={contact}
                                                    handleEditClick={handleEditClick}
                                                    handleDeleteClick={handleDeleteClick}

                                                />

                                            )}
                                        </Fragment>
                                    ))}



                                </tbody>
                            </table>
                            <br />

                            <button class="btn2"><a href="/AddFacility">Add Facility</a></button>
                            <button>Save Edited Facility</button>
                            <button class="btn3">Cancel</button>
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



                );
            }

       }
 //}

;
ReactDOM.render(
    <FacilityOverview />,
    document.getElementById('root')
);







export default FacilityOverview