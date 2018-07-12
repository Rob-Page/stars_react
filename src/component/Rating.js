import React, {Component} from 'react';
import ReactStars from 'react-stars'

class Rating extends Component {
    constructor(props){
        super(props)
        this.state = {rating:0}
    }
    ratingChanged = (newRating) => {
        this.setState({rating:newRating});
      }
    render() {
        return (
            <div className="Rating">
            Current Rating: {this.state.rating}
                <ReactStars 
                count={5} 
                onChange={this.ratingChanged} 
                size={24} 
                color2={'#ffd700'}/>
            </div>
        );
    }
}

export default Rating;
