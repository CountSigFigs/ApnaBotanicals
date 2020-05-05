import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button, FormFeedback} from 'reactstrap'

class ContactUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phoneNum: '',
            feedback: '',
            touched: {
                name: false,
                phoneNum: false,
                email: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    validate(name, phoneNum, email) {

        const errors = {
            name: '',
            phoneNum: '',
            email: ''
        };

        if (this.state.touched.name) {
            if (name.length < 2) {
                errors.name = 'Name must be at least 2 characters.';
            } 
        }

        const reg = /^\d+$/;
        if (this.state.touched.phoneNum){
            if (phoneNum.length !==10 || !reg.test(phoneNum)){
              errors.phoneNum='Phone number should be ten digits long.'
            } 
          }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @';
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
    }

    componentDidMount() {
        window.scrollTo(0, 0);
      }
      
    render() {
 
        const errors = this.validate(this.state.name, this.state.phoneNum, this.state.email); 
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
                                <Input type="text" id="name" name="name"
                                        placeholder="Name"
                                        value={this.state.name}
                                        invalid={errors.name}
                                        onBlur={this.handleBlur("name")}
                                        onChange={this.handleInputChange} />
                                <FormFeedback>{errors.name}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="phoneNum" className="float-left">Phone</Label>
                                <Input type="tel" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        value={this.state.phoneNum}
                                        invalid={errors.phoneNum}
                                        onBlur={this.handleBlur("phoneNum")}
                                        onChange={this.handleInputChange}  />
                                <FormFeedback>{errors.phoneNum}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email" className="float-left">Email</Label>
                                <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        invalid={errors.email}
                                        onBlur={this.handleBlur("email")}
                                        onChange={this.handleInputChange} />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="feedback" className="float-left">Your Feedback</Label>
                                <Input type="textarea" id="feedback" name="feedback"
                                        rows="6"
                                        value={this.state.feedback}
                                        onChange={this.handleInputChange}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" className="btn btn-lg float-left mb-3">
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