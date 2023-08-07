import React from "react";
import {withRouter} from "react-router-dom";
import axios from "axios";

class TourDetail extends React.Component {

  state = {
    tour: {}
  }

  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;

      let res = await axios.get(`http://localhost:8088/api/tour/${id}`);


      this.setState({
        tour: res && res.data ? res.data : {}
      }
      );
      console.log('Check Res from Did Mount: ', res);

    }

  }


  handleClickBack = () => {
    this.props.history.goBack()
  }

  render() {
    let {tour} = this.state;

    let isEmpty = Object.keys(tour).length === 0

    console.log('>>>Check state from Render: ', tour);
    return (
      <>
        <div>
          <h1>Tour Detail with id: {this.props.match.params.id}</h1>
        </div>

        {isEmpty === false &&
          <>
            <div> Tour Name:  {tour.name}</div>
            <div> Tour Price:  {tour.price}</div>
            <div> Tour Slot:  {tour.slot}</div>
            <div>
              <img src={tour.imageUrl} />
            </div>
            <div>
              <button type="button" onClick={() => this.handleClickBack()}>Back</button>
            </div>
          </>
        }
      </>
    );
  }
}

export default withRouter(TourDetail);