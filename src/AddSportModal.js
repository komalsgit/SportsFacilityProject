import React, {Component} from 'react';
import Select from 'react-select';
import {  Table,Modal,Button,Row,Col,Form,} from 'react-bootstrap';


import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
//import queryString from 'query-string';
//import { getByTestId } from '@testing-library/react';

  export class AddSportModal extends Component{

    constructor(props){
        super(props);
       // this.state = {snackbaropen: false, snackbarmsg: ''};
        this.state = { SPORTSID :"",sports:[],EQUIPMENTID:"",equips:[],TIMESLOTID:"",slots:[],LOCATIONID:"",
        locations:[],FACILITYID:"",facis:[],BOOKINGID:"",books:[],sportse:[],snackbaropen: false, snackbarmsg: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
       // this.state = { value: 'Facility is Added Successfully' };
       // this.state = {
          //  isAvailable: true,
          //  numberOfEquipments: 2,
           // FACILITYNAME:this,
            
        // }
       }
     ////  onInputChange = e =>{
       ////  this.setState({FACILITYID:this.state.FACILITYID})
     ////  };
      // componentDidMount(){
       // fetch ('https://localhost:44345/api/TimeSlots')
        //.then(response => response.json())
        //.then(data => {
        //  this.setState({slots:data})
       // });
    //   }
      // componentDidMount(){
       // fetch ('https://localhost:44345/api/SportPage')
       // .then(response => response.json())
        //.then(data => {
       //   this.setState({sportts:data})
       // });
      // }
       componentDidMount(){
        fetch ('https://localhost:44345/api/EquipmentsforGet/GetEquipmentsList')
        .then(response => response.json())
        .then(data => {
          this.setState({equips:data})
        //  fetch ('https://localhost:44345/api/TimeSlots')
         // .then(response => response.json())
         // .then(data => {
          //  this.setState({slots:data})
       ////  fetch ('https://localhost:44345/api/AddSportsTotal')
       ////  .then(response => response.json())
       ////   .then(data => {
        ////    this.setState({sports:data})
          // fetch ('https://localhost:44345/api/SportfromFacility/GetSportsParamTotal' + this.state.FACILITYID)
      // fetch ('https://localhost:44345/api/SportfromFacility?FACILITYID=')
         // .then(response => response.json())
         // .then(data => {
            // this.setState({sports:data})
            fetch ('https://localhost:44345/api/TimeSlots/GetTimeslotsList')
            .then(response => response.json())
            .then(data => {
             this.setState({slots:data})
            fetch ('https://localhost:44345/api/Locationss')
            .then(response => response.json())
            .then(data => {
              this.setState({locations:data})
              fetch ('https://localhost:44345/api/FacilityDD')
            .then(response => response.json())
            .then(data => {
              this.setState({facis:data})
              fetch ('https://localhost:44345/api/Bookings')
              .then(response => response.json())
              .then(data => {
                this.setState({books:data})
               // fetch ('https://localhost:44345/api/SportfromFacility/'+ this.state.FACILITYID)
              const p = 2;
             //const p=queryString.parse(this.state.FACILITYID)
              fetch (`https://localhost:44345/api/SportfromFacility?FACILITYID= ${p}`)
             //  .then(response => {
               
                //  this.setState({sports:response.data})
               // })
                  .then(response => response.json())
                .then(data => {
                  this.setState({sports:data})
                  console.log(p)
             // }); 
  ////  fetch ('https://localhost:44345/api/SportfromFacility?FACILITYID='+ this.state.FACILITYID,
       ////      {
         ////     method: 'GET',
          ////    headers: {
              ////    'Accept': 'application/json',
                ////  'Content-Type': 'application/json'
             /////// }
         // })
           ///  })
           ///  .then(response => response.json())
             ///  .then(data => {
               ///  this.setState({sports:data})
               })
            });
            });
            });
          });
       });
       }
     //  sendid(FACILITYID){
     //  fetch ('https://localhost:44345/api/SportfromFacility?FACILITYID='+FACILITYID)
      //  .then(response => response.json())
      //  .then(data => {
       //   this.setState({sports:data})
    //  }); 
     // }
       

      // componentDidMount(){
       // fetch ('https://localhost:44345/api/SportPage')
       // .then(response => response.json())
       // .then(data => {
        //  this.setState({sportts:data})
      //  });
      // }
      
         snackbarClose = (event) =>{
            this.setState({snackbaropen:false});
         // this.state = { value: 'Facility is Added Successfully' };
          };
         
    
         // this.handleChange = this.handleChange.bind(this);
         // this.handleSubmit = this.handleSubmit.bind(this);
       // };
      // handleChange(event) {
           // this.setState({value: event.target.value});
         // }
        
         handleSubmit(event) {
        ///////	alert('submit: ' + this.state.value);
           // alert(this.state.value);
            event.preventDefault();
        	alert(event.target.SPORTNAME.value);
            
        
            fetch ('https://localhost:44345/api/AddSportsTotal/PostSport',{
               method: 'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json' 
                },
                    body:JSON.stringify({
                   // ID:null,
                    SPORTID:null,
                    //this.state.SPORTID,
                   // SPORTNAME:event.target.SPORTNAME.value,
               // /////	FACILITYENABLED:event.target.FACILITYENABLED.value,
                    ISACTIVE:null,
                    SPORTSID:this.state.SPORTSID,
                    EQUIPMENTID:this.state.EQUIPMENTID,
                    BOOKINGID:this.state.BOOKINGID,
                    LOCATIONID:this.state.LOCATIONID,
                    TIMESLOTID:this.state.TIMESLOTID,
                    FACILITYID:this.state.FACILITYID
                   
               
                   
                   // EQUIPMENTS:
                  // Slots:
                   // LOCATIONID:event.target.LOCATIONID.value
                    //////////sportEnabled:event.target.sportEnabled.value
    
               })
            })
           .then(res => res.json())
                .then((res)=>
                {
                   alert(res );
                  // this.setState({snackbaropen:true,snackbarmsg:res})
               },
                (error)=>{
                   alert('Failed')
                  // this.setState({snackbaropen:true,snackbarmsg:'failed'})
                }
                )
        }
        handleChange=(e)=>{
          let target = e.target
          let name =  target.name
          let value = Array.from(target.selectedOptions, option=> option.value);
          this.setState({
            [name]:value
          });
        }
      //  handleInputChange(event) {
       //  }
        render() {
           // function shoot() {
              //  alert("Form Submitted!");
   //  }
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
            <Modal.Header  >
              <Modal.Title id="contained-modal-title-vcenter">
               Add Sport
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
           
            <Row>
                <Col sm={6}>
                <Form  onSubmit={this.handleSubmit}> 
                <Form.Group controlId="SPORTNAME">
                <br></br>
                <Form.Label>Location</Form.Label>
                    <Form.Control as="select" onChange={(ddl=>this.setState({LOCATIONID:ddl.target.value}))} controlId="LocationDropdown" >
                      {
                        this.state.locations.map(location=>
                          <option  value={location.LOCATIONID} >{location.LOCATIONNAME}</option>
                          )
                      }
                      
                    </Form.Control>
                    <Form.Label>Facility</Form.Label>
                    <Form.Control as="select" onChange={(ddl=>this.setState({FACILITYID:ddl.target.value}))} controlId="FacilityDropdown" >
                      {
                        this.state.facis.map(faci=>
                          <option  value={faci.FACILITYID} >{faci.FACILITYNAME}</option>
                          )
                      }
                    
                    </Form.Control>
                   <Form.Label>Sport</Form.Label>
                    <Form.Control as="select" onChange={(ddl=>this.setState({SPORTSID:ddl.target.value}))} controlId="SporteDropdown" >
                      {
                      this.state.sports.map(sport=>
                          <option  value={sport.SPORTSID} >{sport.SPORTNAME}</option>
                          )
                      }
                      
                    </Form.Control>
                    </Form.Group>
               <br></br>
                <Form.Label>Equipments</Form.Label>
                    <Form.Control as="select" onChange={(ddl=>this.setState({EQUIPMENTID:ddl.target.value}))} controlId="EquipmentDropdown" >
                      {
                        this.state.equips.map(eqs=>
                          <option  value={eqs.EQUIPMENTID} >{eqs.EQUIPMENTNAME}</option>
                          )
                      }
                      
                    </Form.Control>
                    <br></br>
                    <Form.Label>TimeSlots</Form.Label>
                    <Form.Control as="select" multiple={true} onChange={(ddl=>this.setState({TIMESLOTID:ddl.target.value}))} controlId="TimeSlotDropdown" >
                      {
                        this.state.slots.map(slots=>
                          < option  value={slots.TIMESLOTID} >{slots.TIMESLOT}</option>
                          )
                      }
                      
                    </Form.Control>
                    <br></br>
                    <Form.Label>TimeSlotss</Form.Label>
                    <Form.Control as="Select"  multiple={true} onChange={this.handleChange}  value={this.state.slots.TIMESLOT} >
                      {
                        this.state.slots.map(slots=>
                          < option  value={slots.TIMESLOTID} >{slots.TIMESLOT}</option>
                         
                         )
                        
                      }
                     <div>{this.state.slots.join(', ')}</div>
                      
                    </Form.Control>
                    
                    <br></br>
                   
                    <Form.Label>Bookings</Form.Label>
                    <Form.Control as="select" onChange={(ddl=>this.setState({BOOKINGID:ddl.target.value}))} controlId="BookingsDropdown" >
                      {
                        this.state.books.map(books=>
                          <option  value={books.BOOKINGID} >{books.BOOKINGNAME}</option>
                          )
                      }
                      
                    </Form.Control>
                    <br></br>
               
                <Form.Group controlId="ISACTIVE">
                    <label>IsActive</label>
                    <input
                    type="checkbox"
                    name="ISACTIVE"
                    
                    placeholder="Sport Enabled "

                    />
                     </Form.Group>
                    
                <Form.Group>
                <Button type="submit">Submit!</Button>
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
