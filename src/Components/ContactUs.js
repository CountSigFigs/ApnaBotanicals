import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button, FormFeedback} from 'reactstrap'

class ContactUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phoneNum: '',
            email: '',
            feedback: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        event.preventDefault()
        console.log(this.state)
       this.props.postContact(this.state.name, this.state.phoneNum, this.state.email, this.state.feedback)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
      }
    
    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center mt-3">
                        <i className="fa fa-leaf fa-4x mt-1"></i>
                        <h2>Send Us Your Feedback</h2>
                        <p><em>We would love to hear from you!</em></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto text-center">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="name" className="float-left">Name</Label>
                                <Input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name}
                                        placeholder="Name"
                                />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="phoneNum" className="float-left">Phone</Label>
                                <Input type="tel" id="phoneNum" name="phoneNum" value={this.state.phoneNum}
                                        placeholder="Phone number"
                                        onChange={this.handleChange}
                                
                                         />
                              
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email" className="float-left">Email</Label>
                                <Input type="email" id="email" name="email" value={this.state.email}
                                        placeholder="Email"
                                        onChange={this.handleChange}
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
                    </div>
                </div>
            </div>
        )
    }
}


export default ContactUs;