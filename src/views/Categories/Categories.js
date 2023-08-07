import React from "react";
import axios from "axios";
import './Categories.scss';


class Categories extends React.Component {

  state = {
    listCategories: []
  }

  componentDidMount() {
    this.getCategory();
    console.log('-->>> Check Categories: ', this.state.listCategories);
  }

  async getCategory() {
    const response = await axios.get('http://localhost:8088/api/category');
    this.setState({listCategories: response.data});
  }

  render() {
    let {listCategories} = this.state;

    return (
      <div className="list-categories-container">
        <div className="title">
          <i className="fas fa-tags">Loại Tour Du Lịch</i>
        </div>
        <div className="list-categories-content">
          {listCategories && listCategories.length > 0 &&
            listCategories.map((category, index) => {
              return (
                <div className="list-categories-item" key={category.id}>
                  {index + 1} -  <i className="fas fa-tag"></i> {category.name}
                </div>
              )
            })}
        </div>

      </div>
    );
  }



}

export default Categories;