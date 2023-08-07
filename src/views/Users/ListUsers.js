import React from "react";
import axios from "axios";
import './ListUser.scss';

class ListUser extends React.Component {

  state = {
    listsUsers: []
  }

  async componentDidMount() {
    let res = await axios.get('https://reqres.in/api/users?page=1');
    console.log('Check res: ', res.data.data);
    this.setState({
      listsUsers: res && res.data && res.data.data ? res.data.data : []
    })
  }

  render() {
    let {listUsers} = this.state;
    return (
      <div className="List-User-Container">
        <div className="title">
          Fetch All Users
        </div>
        <div className="list-user-content">
          {listUsers && listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div className="child" key={item.id}>
                  {index + 1} - {item.first_name} {item.last_name}
                </div>
              )
            })
          }
        </div>
      </div >
    );
  }

}

export default ListUser;
