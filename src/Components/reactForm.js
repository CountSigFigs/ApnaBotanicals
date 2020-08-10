import React from 'react';
import { useForm}  from 'react-hook-form';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import ErrorMessage from './errorMessage';

function ContactUs({postComment}){

        const { register, handleSubmit, errors } = useForm();
        
        const onSubmit = ({name, phoneNum, email, feedback })=> {
            postComment(name, phoneNum, email, feedback)
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center mt-3">
                        <i className="fa fa-leaf fa-4x mt-1"></i>
                        <h2>Send us your Feedback</h2>
                        <p><em>We would love to hear from you!</em></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto text-center">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <FormGroup>
                                <Label htmlFor="name" className="float-left">Name</Label>
                                <Input 
                                    name="name"
                                    innerRef={register({ required:true, minLength:2})}
                                />
                                {errors.name && errors.name.type ==='required' && <span style={{color:'red'}}>'This field is required'</span>}
                                {errors.name && errors.name.type === 'minLength'  && <span style={{color:'red'}}>'Your name must be at least two characters'</span>}
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="phoneNum" className="float-left">Phone</Label>
                                <Input
                                    name="phoneNum"
                                    innerRef={register({ required: true, pattern: /^\d+$/, minLength:10, maxLength:10})}
                                />
                                {errors.phoneNum && errors.phoneNum.type === 'required' && <div style={{color:'red'}}>'This field is required'</div>}
                                {errors.phoneNum && errors.phoneNum.type === 'pattern' && <div style={{color:'red'}}>'This field must only contain numbers'</div>}
                                {errors.phoneNum && errors.phoneNum.type === 'minLength' && <div style={{color:'red'}}>'Phone number must be ten digits long'</div>}
                                {errors.phoneNum && errors.phoneNum.type === 'maxLength' && <div style={{color:'red'}}>'Phone number must be ten digits long'</div>}
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email" className="float-left">Email</Label>
                                <Input
                                    name="email"
                                    innerRef={register({required:true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                                />
                                {errors.email && errors.email.type === 'required' && <div style={{color:'red'}}>'This field is required'</div>}
                                {errors.email && errors.email.type === 'pattern' && <div style={{color:'red'}}>'Please enter a valid email address'</div>}
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="feedback" className="float-left">Your Feedback</Label>
                                <Input
                                    type="textarea" 
                                    name="feedback"
                                    rows="6"
                                    innerRef={register({required:true, minLength:5})}
                                ></Input>
                                {errors.feedback && errors.feedback.type === 'required' && <div style={{color:'red'}}>'This field is required'</div>}
                                {errors.feedback && errors.feedback.type === 'minLength'  && <span style={{color:'red'}}>'Your feedback must be at least five characters'</span>}
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