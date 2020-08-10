import React from 'react';
import { useForm}  from 'react-hook-form';
import { Form, FormGroup, Input, Label, Button, FormFeedback} from 'reactstrap'
import ErrorMessage from './errorMessage';

function ContactUs(){

        const { register, handleSubmit, errors } = useForm();
        const onSubmit = data => console.log(data)
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
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <FormGroup>
                                <Label htmlFor="name" className="float-left">Name</Label>
                                <Input id="name" name="name"
                                        defaultValue="Name"
                                        ref={register({required:true, minLength:2})}
                                       />
                                <FormFeedback>{errors.name}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="phoneNum" className="float-left">Phone</Label>
                                <Input type="tel" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                         />
                                <FormFeedback></FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email" className="float-left">Email</Label>
                                <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        />
                                <FormFeedback></FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="feedback" className="float-left">Your Feedback</Label>
                                <Input type="textarea" id="feedback" name="feedback"
                                        rows="6"
                                        ></Input>
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


export default ContactUs;