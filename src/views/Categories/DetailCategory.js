import React from "react";
import './CategoriesDetail.scss';
import {withRouter} from "react-router-dom";
import axios from "axios";

class DetailCategory extends React.Component {

  state = {
    category: {} // {} là một đối tượng category
  }

  async componentDidMount() {
    // console.log('>>Check id: ', this.prop)
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;

      let res = await axios.get(`http://localhost:8088/api/category/${id}`)



      this.setState({
        category: res && res.data.id && res.data.name ? res.data : undefined
      });

      console.log('>>>Check res: ', res)
    }


  }

  render() {
    console.log('>>Check state: ', this.state)
    let {category} = this.state;
    return (
      <>
        <h1 >
          Loại Tour
        </h1>

        <div>

        </div>
      </>
    );
  }


}

export default withRouter(DetailCategory);