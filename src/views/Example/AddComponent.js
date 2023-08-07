import React from "react";

class AddComponent extends React.Component {

  state = {
    title: '',
    salary: ''
  }


  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }
  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value
    })
  }
  handleSubmit = (event) => {

    event.preventDefault()
    if (!this.state.title || !this.state.salary) {
      alert('Please enter')

      return;
    }

    console.log(this.state)

    this.props.addNewJob({
      id: Math.floor(Math.random() * 100),
      title: this.state.title,
      salary: this.state.salary
    })

    this.setState({
      title: '',
      salary: ''
    })


  }

  addNewJob = (job) => {

    console.log('Checckk job: ', job)
    let currentJob = this.state.arrJobs;
    currentJob.push(job)


    this.setState({
      arrJobs: currentJob
      // arrJobs: [...this.state.arrJobs, job] // cập nhật lại state JOB - cách 2
    })


  }

  render() {
    return (
      <div>
        <form>
          <label for="fname" type="text">Title:</label><br />
          <input type="text" value={this.state.title} onChange={(event) => this.handleChangeTitle(event)} /><br />
          <label for="lname">Salary:</label><br />
          <input type="text" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)} /><br /><br />



          <input type="button" value='submit'
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
      </div>
    );
  }



}

export default AddComponent;