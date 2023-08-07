import React from 'react';
import ChildOfMyCompt from './ChildOfMyCompt';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {

    /* 
    
    JSX => return 1 khối vd như reuturn <div>   </div>
    fragment
    
    */

    // khai báo state 
    state = {
        arrJobs: [
            {id: '1', title: 'developer', salary: '500'},
            {id: '2', title: 'tester', salary: '400'},
            {id: '3', title: 'Project Manager', salary: '700'}

        ]
    }

    // //Ví dụ của state
    // handleOnchange = (event) => {
    //     console.log(event.target.value, 'event target', event.target, 'event object', event)
    //     //state sẽ thay đổi dựa trên sự kiện onChange với target là input, value là text trong input
    //     this.setState({
    //         name: event.target.value,
    //         sdt: event.target.value
    //     })
    // }
    // handleClickButton = () => {
    //     console.log('hit button')
    //     alert('click me')
    // }

    addNewJob = (job) => {

        this.setState({
            arrJobs: [...this.state.arrJobs, job] // cập nhật lại state JOB với đối tượng Job
        })

        console.log('Check job from MyComponent');


    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Check componentUpdate: prevProps: ' + prevProps + ' state: ' + prevState)
    }
    componentDidMount() {
        console.log('MyComponent Didmount');
    }


    deleteJob = (job) => {

        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id);
        // this.props.deleteJob(job);
        this.setState({
            arrJobs: currentJob
        })
    }

    render() {
        const {arrJobs} = this.state;
        console.log('>>> Check state: ', this.state);
        return (



            <>

                <AddComponent

                    addNewJob={this.addNewJob}
                />

                <ChildOfMyCompt arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob} />

            </>




        )
    }
}

export default MyComponent;