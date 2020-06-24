import React, {Component} from 'react';
import { Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom';
import Reviews from './Reviews';

const business = require('../shared/Images/business.jpg');

class AboutUs extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'',
            name:'',
            feedback:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
      }
    
    handleChange(event){
        const {target} = event;
        const {value} = target;
        const {name} = target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        alert('Thanks for your review! We appreciate your bussiness')
       this.props.postReview(this.state.title, this.state.name, this.state.feedback)
    }

    render (){
    return (
        <div className="container mb-3">
            <div className="row">
                <div className="col text-center mt-3">
                    <i className="fa fa-leaf fa-4x mt-1"></i>
                </div>
            </div>
            <div className='row my-2'>
                <div className="col-8 col-md-6 text-center m-2 mx-auto">
                    <img src={business} alt='owners' id="owner" />
                </div>
                <div className="col-9 col-md-5 mx-auto">
                <h2>About Us</h2>
                <p> Apna Botanicals is dedicated to bringing a consistent quality product to our consumers. 
                Quality and satisfaction is our <strong> #1</strong> priority. We are a family owned and operated 
                business in Springfield, Oregon and look forward to serving you. Want to hear from us? Click the 
                button below to send us a message</p>
                <Button className="btn btn-lg" id="contactButton"><Link to='/contactus'>Contact Us</Link></Button>
                </div>
            </div>
            <Row>
                <Col className='text-center' xs={12}><h2>Leave Us a Review!</h2></Col>
                <Col xs={12} sm={9} className='mx-auto'>
                <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="Title" className="float-left">Title</Label>
                                <Input type="text" id="title" name="title" value={this.state.title}
                                        placeholder="Title"
                                        onChange={this.handleChange}
                                         />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="name" className="float-left">Name</Label>
                                <Input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name}
                                        placeholder="Name"
                                />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="feedback" className="float-left">Your Feedback</Label>
                                <Input type="textarea" id="feedback" name="feedback" value={this.state.feedback}
                                        rows="6"
                                        onChange={this.handleChange}
                                       ></Input>
                            </FormGroup>
                            
                            <FormGroup>
                                <Button type="submit" value='submit' className="btn btn-lg float-left mb-3">
                                        Send
                                </Button>
                            </FormGroup>
                        </Form>
                </Col>
            </Row>
        </div>
    )
    }
}

export default AboutUs;
