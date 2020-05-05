import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Button, Form, FormGroup, Input, Label } from 'reactstrap'



class RenderProducts extends React.Component{
   
    render () {
        const displayItems= this.props.items.map(item =>{
        return (
            <div key={item.id} className="col-9 col-md-6 col-lg-4 mb-3 mt-3">
                <Card className="productDisplay col-9 mx-auto">
                    <CardImg src={item.image} />
                    <CardBody className="text-center">
                        <CardTitle className="text-center"><span className="green">{item.name}</span></CardTitle>
                        <CardText className="text-center">{item.description}<br />Price: ${item.price} per oz</CardText>
                        <Form>
                            <FormGroup className='d-flex inline justify-content-center'>
                               <Label className='mr-2 my-auto' for='quanity'>Quanity</Label>
                               <Input type='number' style={{width:75}}>
                               </Input>
                            </FormGroup>
                            <Button className="btn text-center" onClick={() => this.props.onClick(item)}> Add to Cart</Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    })
    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-around">
                {displayItems}
            </div>
        </div>
    )
  }
}
  export default RenderProducts;
