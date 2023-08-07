import React from 'react';
import './Demo.scss';
class ChildOfMyCompt extends React.Component {
    // ... (your other methods)

    state = {
        showJob: false,

    }

    handleShowhideClick = () => {

        this.setState({
            showJob: !this.state.showJob
        })

    }

    handleOnClickX = (job) => {
        console.log('>>>Handle onClickX: ', job)
        this.props.deleteJob(job);
    }



    render() {

        let {arrJobs} = this.props;
        // Change 'arrJobs' to 'arrJob' in the destructuring
        let {showJob} = this.state;

        let check = showJob === true ? 'showJob = true' : 'showJob  = false';

        console.log(' check condition: ', check);

        return (
            <>
                {/* Nếu showJob là falsse thì render ra nút Show */}

                {showJob === false ?
                    < div className="">
                        <button className='btn-show' onClick={() => this.handleShowhideClick()}>
                            Show
                        </button>
                    </div>

                    :
                    // Ngược lại

                    <>
                        <><div className="job-lists">
                            {arrJobs.map((item) => {
                                if (item.salary >= 500) {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <> </>
                                            <span onClick={() => this.handleOnClickX(item)}>X</span>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div><div>
                                <button onClick={() => this.handleShowhideClick()}>
                                    hide
                                </button>
                            </div></>
                    </>
                }

            </>
        );
    }
}

export default ChildOfMyCompt;
