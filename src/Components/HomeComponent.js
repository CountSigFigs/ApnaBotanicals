import React, {Component} from 'react';
import Header from './HeaderComponent'
import { Button, Card, CardTitle, CardImg, } from 'reactstrap'
import { Link } from 'react-router-dom';

const confusedGuy = require('../shared/Images/confusedguy.png');
const kratom = require('../shared/Images/kratom6.jpg');


function Kratom() {
    return (
        <div className="container kratomInfo mb-5">
            <div className="row">
                <div className="col-12 col-md-5 text-center">
                    <img src={kratom} className="img-fluid img1" alt='kratom' />
                </div>
                <div className="col-12 col-md-7 mt-3">
                    <h2 id="kratom">Kratom</h2>
                    <p>A tropical tree in Southeast Asia. Its leaves have been used for hundreds of years to relieve pain. They can be eaten raw,
            but more often they’re crushed and brewed as tea or turned into capsules, tablets, and liquids. <span className="green">Health benefits</span> include
            relieving pain, enhancing mood, increasing focus, more energy.</p>
                    <a href='https://www.webmd.com/vitamins/ai/ingredientmono-1513/kratom' target='_blank' rel="noopener noreferrer"><Button className="btn btn-lg btn-success">Learn More</Button></a>
                </div>
            </div>
        </div>
    )
}

function Products (props){
    const displayItems= props.display.map(item =>{
        return (
            <div key={item.id} className="col-9 col-md-4 mx-5 overlay">
                <h4 className="text-center">{item.type}</h4>
                <Card>
                    <CardImg src={item.image} height='225px' className="image" />
                    <span className='middle'>
                        <CardTitle className="text-center"><Link to={item.link}><Button className="btn btn-lg">Shop {item.type} </Button></Link></CardTitle>
                    </span>
                </Card>
            </div>
        )
    })
    return (
        <div className="container mt-5">
            <div className="row justify-content-around">
                <div className="col text-center mb-1">
                    <h2>Our Products</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                {displayItems}
            </div>
        </div>
    )
}

function UserFaqs() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-4 text-center mt-auto">
                    <img src={confusedGuy} className="img-fluid" style={{height:'250px'}} alt='confused guy'/>
                </div>
                <div className="col-8 mt-5">
                    <h2>New User Guide</h2>
                    <p>Head over to our new user guide for some frequently asked questions. We want all of our customers to be informed
                    before they buy which is why we made this. We information on the effects of kratom, how much to take, how to
                    storage it, and serving tips.
                    </p>
                    <Link to='./guide'><Button className="btn btn-lg btn-success">Click here</Button></Link>
                </div>
            </div>
            <div className="row">
                <div className="col my-5">
                    <h2>Questions</h2>
                    <p>We are here to help. Head over to our contact page and connect with us. As a local business, we strive to provide
          the best strains available to our consumers so they keep coming back.</p>
                    <Link to='./contactus'><Button className="btn btn-lg btn-success">Contact Us</Button></Link>
                </div>
            </div>
        </div>
    )
}

class Home extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
      }

    render (){
    return (
        <div>
            <Header />
            <Kratom />
            <Products display={this.props.display} />
            <UserFaqs />
        </div>
    )
    }
}

export default Home;