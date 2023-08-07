import React from 'react';
import {withRouter} from "react-router";
import Color from '../HOC/Color';
import logo from '../../assets/images/logo.png'
import {connect} from 'react-redux';
import {useState} from 'react'
class Home extends React.Component {

  componentDidMount() {
    // setTimeout(() => {
    //   console.log('Check timeouts');
    //   // this.props.history.push('/todos');
    // }, 3000)
  }


  handleDeleteUser = (user) => {
    console.log('>>Check users:', user)
    this.props.deleteUserRedux(user);
  }

  handleCreateUser = () => {
    this.props.addUserRedux();
  }




  render() {
    console.log('Check props redux: ', this.props.dataRedux);

    let listUsers = this.props.dataRedux;

    return (
      <>
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <img src={logo} style={{width: '200px', height: '200px'}} />
        </div>
        <div>
          <form>

          </form>
        </div>
        <div>
          {listUsers && listUsers.length > 0 && listUsers &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} <>- </>
                  <span onClick={() => this.handleDeleteUser(item)}>Xóa</span>
                </div>
              )
            })}

          <button onClick={() => this.handleCreateUser()}>Thêm User</button>
        </div>
      </>

    );
  }




}
const mapStateToProps = (state) => {
  //return 1 object
  return {dataRedux: state.users}
}

const mapDispatchToProps = (dispatch) => {
  //return 1 function
  return {
    deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete}),
    addUserRedux: () => dispatch({type: 'CREATE_USER'}),
  }
}


// export default withRouter(Home);
//connect là HOC 
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));