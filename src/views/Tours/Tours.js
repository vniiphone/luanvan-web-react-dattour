import React from "react";
import axios from "axios";
import {toast} from 'react-toastify';
import './Tour.scss';
import {withRouter} from 'react-router-dom';

class Tours extends React.Component {

  state = {
    listTours: []
  }

  componentDidMount() {
    this.getTours();
  }

  // componentDidUpdate(prevProps, prevState) {

  //   // if (prevState.danhSachTours !== this.state.danhSachTours) {
  //   console.log('-->>> Check from componentDidUpdate: ', this.state.danhSachTours);
  //   this.getTours();
  // }
  async getTours() {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxdW9jdnUiLCJpYXQiOjE2OTA4ODY2NjMsImV4cCI6MTY5MDk3MzA2M30.AiffQkhrFZSIv5PGzh67jMkb3EQkc9ktB7cTVcafLRnMFHF3lCe4i_yaQ6vK10XE7QTauw2crAWD8nbq158Icg';

    // Get dữ liệu từ API
    const response = await axios.get(
      'http://localhost:8088/api/tour'
    );
    toast.success('Lấy danh sách thành công');
    // Lấy nội dung content từ response
    const content = response.data.content;

    // Set nội dung content vào state và sử dụng callback để log state sau khi cập nhật
    this.setState({listTours: content});
  }

  handleOnClickDetailTour = (tour) => {
    this.props.history.push(`/tour/${tour.id}`);
  }

  render() {
    let {listTours} = this.state;
    console.log('-->>> Check from render: ', this.state);
    return (
      <div className="list-tours-container">
        <h1>Tours</h1>
        <div className="list-tours-content">

          {
            listTours && listTours.length > 0 &&
            listTours.map((item, index) => {
              return (
                <div className="list-tour-item"
                  key={item.id}
                  onClick={() => this.handleOnClickDetailTour(item)}>

                  {index + 1} -  <i className="fas fa-tag"></i> {item.name} - {item.price}$ <> </>

                </div>
              )
            })}

        </div>

      </div>

    );
  }
}


export default withRouter(Tours);