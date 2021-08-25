import React, {Component,useState} from 'react';
import {  Table,Modal,Button,Row,Col,Form,} from 'react-bootstrap';
  
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
    
  export class AddBookModal extends Component{
   
    constructor(props){
        super(props);
        this.state = { LOCATIONID :"",locations:[],FACILITYID:"",facies:[],TIMESLOTID:"",
        slotss:[],BOOKINGSTATUSID:"",bstatus:[],SPORTSID:"",sportss:[],
        users:[],USERID:"",EQUIPMENTID:"",equips:[],snackbaropen: false, snackbarmsg: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
      
       }
       componentDidMount(){
        fetch ('https://localhost:44345/api/Locationss')
        .then(response => response.json())
        .then(data => {
          this.setState({locations:data})
          fetch ('https://localhost:44345/api/AddSportsTotal')
          .then(response => response.json())
          .then(data => {
            this.setState({sportss:data})
            fetch ('https://localhost:44345/api/FacilityDD')
            .then(response => response.json())
            .then(data => {
              this.setState({facies:data})
              fetch ('https://localhost:44345/api/TimeSlots/GetTimeslotsList')
              .then(response => response.json())
              .then(data => {
               this.setState({slotss:data})
               fetch ('https://localhost:44345/api/BookingStatus')
               .then(response => response.json())
               .then(data => {
                this.setState({bstatus:data})
                fetch ('https://localhost:44345/api/EquipmentsforGet/GetEquipmentsList')
                .then(response => response.json())
                .then(data => {
                  this.setState({equips:data})
                  fetch ('https://localhost:44345/api/Users/GetUsers')
                  .then(response => response.json())
                  .then(data => {
                    this.setState({users:data})
                });   
          });
        });
        });
        });
        });
        });
       }
      
         snackbarClose = (event) =>{
            this.setState({snackbaropen:false});
       ;
          };
         
        
         handleSubmit(event) {
    
            event.preventDefault();

            
        
            fetch ('https://localhost:44345/api/TimeslotBookings/',{
               method: 'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json' 
                },
                    body:JSON.stringify({
                    BOOKINGSID:null,
                  
                    TIMESLOTID:this.state.TIMESLOTID,
                    LOCATIONID:this.state.LOCATIONID,
            
                    SPORTSID:this.state.SPORTSID,
                    EVENTDATE:null,
                    CREATEDDATE:null,
                    BOOKINGSTATUSID:this.state.BOOKINGSTATUSID,
                   FACILITYID:this.state.FACILITYID,
                  
                    USERID:this.state.USERID,
                    EQUIPMENTID:this.state.EQUIPMENTID,
                  
    
               })
            })
           .then(res => res.json())
                .then((res)=>
                {
                  // alert(res );
                   this.setState({snackbaropen:true,snackbarmsg:res})
               },
                (error)=>{
                  // alert('Failed')
                   this.setState({snackbaropen:true,snackbarmsg:'failed'})
                }
                )
        }
      
       
      
        render() {
        
        return(
            <div className="container" >
                <Snackbar
                anchorOrigin={{vertical:'top',horizontal:'top'}}
                open = {this.state.snackbaropen}
                autoHideDuration ={9000}
                onClose={this.snackbarClose}
                message = {<span id="message-id">{this.state.snackbarmsg}</span>}
                action={[
                    <IconButton
                    key="close"
                    arial-label="Close"
                    color="inherit"
                    onClick={this.snackbarClose}
                    >x</IconButton>
                ]}
                />
            <Modal
          {...this.props}
            size="lg"
           
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header >
              <Modal.Title id="contained-modal-title-vcenter">
               Add Facility
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
           
            <Row>
                <Col sm={6}>
                <Form  onSubmit={this.handleSubmit}> 
                 <br></br>
                    <Form.Label>Location</Form.Label>
                    <Form.Control as="select" onChange={(ddl=>this.setState({LOCATIONID:ddl.target.value}))} controlId="locDropdown" >
                      {
                        this.state.locations.map(location=>
                          <option  value={location.LOCATIONID} >{location.LOCATIONNAME}</option>
                          )
                      }
                      
                    </Form.Control>
                    <br></br>
                    <Form.Label>Facility</Form.Label>
                    <Form.Control as="select" onChange={(ddl=>this.setState({FACILITYID:ddl.target.value}))} controlId="FacisDropdown" >
                      {
                        this.state.facies.map(location=>
                          <option  value={location.FACILITYID} >{location.FACILITYNAME}</option>
                          )
                      }
                      
                    </Form.Control>
                    <br></br>
                    <Form.Label>Sports</Form.Label>
                    <Form.Control as="select" onChange={(ddl=>this.setState({SPORTSID:ddl.target.value}))} controlId="SPDropdown" >
                      {
                        this.state.sportss.map(location=>
                          <option  value={location.SPORTSID} >{location.SPORTNAME}</option>
                          )
                      }
                      
                    </Form.Control>
                    <br></br>
                    <Form.Label>Equipments</Form.Label>
                    <Form.Control as="select" onChange={(ddl=>this.setState({EQUPMENTID:ddl.target.value}))} controlId="SPDropdown" >
                      {
                        this.state.equips.map(location=>
                          <option  value={location.EQUIPMENTID} >{location.EQUIPMENTNAME}</option>
                          )
                      }
                      
                    </Form.Control>
                    <br></br>
                    <Form.Label>TimeSlots</Form.Label>
                    <Form.Control as="select" onChange={(ddl=>this.setState({TIMESLOTID:ddl.target.value}))} controlId="SlotsDropdown" >
                      {
                        this.state.slotss.map(location=>
                          <option  value={location.TIMESLOTID} >{location.TIMESLOT}</option>
                          )
                      }
                      
                    </Form.Control>   
                    <br></br>
                    <Form.Label> Booking Status</Form.Label>
                    <Form.Control as="select" onChange={(ddl=>this.setState({BOOKINGSTATUSID:ddl.target.value}))} controlId="bookingstatusDropdown" >
                      {
                        this.state.bstatus.map(location=>
                          <option  value={location.BOOKINGSTATUSID} >{location.BOOKINGSTATUS}</option>
                          )
                      }
                      
                    </Form.Control>
                    <br></br>
                    <Form.Label>User</Form.Label>
                    <Form.Control as="select" onChange={(ddl=>this.setState({USERID:ddl.target.value}))} controlId="userDropdown" >
                      {
                        this.state.users.map(location=>
                          <option  value={location.USERID} >{location.EMAIL}</option>
                          )
                      }
                      
                    </Form.Control>
                    <br></br>
                <Form.Group>
                <Button type="submit">Submit</Button>
                </Form.Group>
                </Form>
                </Col>
            </Row>
			 
       
            </Modal.Body>
            <Modal.Footer>
           
              <Button  variant="danger"  onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
            </div>

        );
    }
}

