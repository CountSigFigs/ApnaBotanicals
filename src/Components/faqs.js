import React, {Component} from 'react';

const picture= require('../shared/Images/closeup.jpg');

class NewUserGuide extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
      }
      
    render (){
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <i className="fa fa-leaf fa-4x mt-2"></i>
                    <h2>New User Guide</h2>
                    <hr className="underscore" />
                    <img src={picture} alt='closeup' id="closeUp" className="d-none d-sm-block mx-auto" />
                </div>
            </div>
            <div className="row">
                <div className="col mt-2">
                    <h3>Tips for Users</h3>
                    <hr />
                    <h5>Tip #1: Start Low</h5>
                    <p>When you first start with kratom, start with the lowest dosage. Trying something new for the 
                    first time can cause a lot of anixety, especially if you do not konw how your body will react. 
                    For your first few times, start with half a dose. Build up to a full dose over a week. This will 
                    provide you with a better user experience. </p>
                    <h5>Tip #2: Less is More </h5>
                    <p>When taking kratom, the effects are similiar to that of a bell curve. This means that when you 
                    take too low or too much of a dose, the effects are minimal. When you take a mid amount of Kratom, 
                    the effecst are at it's highest</p>
                    <h5>Tip #3: Change it Up</h5>
                    <p>Don't just stick with one strain! Kratom tolerance is built up by using just one strand and there 
                    are tons of strands out there! We offer five strains, each offering a different user experience. 
                    Experitment with different ones to sew what works best for you</p>
                </div>
            </div>
            <div className="row">
                <div className="col mt-2">
                    <h3>Storing Kratom</h3>
                    <hr />
                    <p>The best way to store kratom is to practice: <em className="green">Keep it Cool, Avoid Sunlight, and Avoid Oxidation.</em>
                    Kratom is senstive to the natural world and over time it can reduce its potency which is why we recommend the three things above.
                    When storing kratom, its best kept in a tightly wraped bag in a cupward away from sunlight and heat</p>
                </div>
            </div>
            <div className="row">
                <div className="col mt-2">
                    <h3>Kratom Serving Tips</h3>
                    <hr />
                    <p>There are countless ways to use kratom. To just to name a few: making a tea, adding to yogurt, taking as a capsule, 
                    and making a milkshake. Whichever way you decide to take kratom, start with a small does and work your way up. </p>
                </div>
            </div>
        </div>
    )
}
}
export default NewUserGuide;
