import React from 'react';
import { useForm}  from 'react-hook-form';
import { Form, FormGroup, Input, Label, Button, FormFeedback} from 'reactstrap'
import ErrorMessage from './errorMessage';

function ContactUs(){

        const { register, handleSubmit, errors } = useForm();
        const onSubmit = data => console.log(data);

        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center mt-3">
                        <i className="fa fa-leaf fa-4x mt-1"></i>
                        <h2>Send</h2>
                        <p><em>We would love to hear from you!</em></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto text-center">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormGroup>
                                <Label htmlFor="name" className="float-left">Name</Label>
                                <Input 
                                    name="name"
                                    innerRef={register({ required:true, minLength:2})}
                                />
                                {errors.name && errors.name.type ==='required' && <span style={{color:'red'}}>'This field is required'</span>}
                                {errors.name && errors.name.type === 'minLength'  && <span style={{color:'red'}}>'Your name must be at least two characters'</span>}
                            </FormGroup>
                                <Label htmlFor="phoneNum" className="float-left">Phone</Label>
                                <Input
                                    name="phoneNum"
                                    innerRef={register({ required: true})}
                                />
                                {errors.phoneNum && <div style={{color:'red'}}>'This field is required'</div>}
                                <Label htmlFor="email" className="float-left">Email</Label>
                                <Input
                                    name="email"
                                    innerRef={register({required:true})}
                                />
                                {errors.email && <div style={{color:'red'}}>'This field is required'</div>}
                                <Label htmlFor="feedback" className="float-left">Your Feedback</Label>
                                <Input
                                    type="textarea" 
                                    name="feedback"
                                    rows="6"
                                    innerRef={register({required:true, minLength:5})}
                                ></Input>
                                {errors.feedback && errors.feedback.type === 'required' && <div style={{color:'red'}}>'This field is required'</div>}
                                {errors.feedback && errors.feedback.type === 'minLength'  && <span style={{color:'red'}}>'Your feedback must be at least five characters'</span>}
                                <button type="submit" className="btn btn-lg float-left mb-3">
                                        Send
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        )
}


export default ContactUs;