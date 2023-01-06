import React, { Component } from 'react';

class TeamTask extends Component {
    state = {
        projectText: '',
        project: [],
        projectId: 1,
    }

    textAreaChange = (e) => {
        const textareavalue = e.target.value
        this.setState({ ...this.state, projectText: textareavalue })

    }
    addProject = () => {
        const projectDetails = this.state.project
        const textareavalue = this.state.projectText
        const newdetails = {
            id: this.state.projectId,
            description: textareavalue
        }
        projectDetails.push(newdetails)
        this.setState({
            ...this.state,
            project: projectDetails,
            projectId: this.state.projectId + 1,
            projectText: ''
        })
        console.log('project', this.state.project);
    }
    deleteProject = (projectId)=>{
        const proj = this.state.project.filter((data)=>{return data.id !== projectId})
        this.setState({...this.state, project: proj})
        console.log('projectId',projectId );
        console.log('proj',proj );
    }
    render() {
        return (
            <>
                <div className='main_div'>
                    <div className='section_div'>
                        <div className='section_head'>
                            <span>Projects</span>
                            <div>

                                <textarea name="" id="" cols="60" rows="3" value={this.state.projectText} onChange={this.textAreaChange}></textarea>
                                <button className='saveBtn' onClick={this.addProject}>Post</button>
                            </div>
                        </div>
                        <div className='grid_container'>
                            {
                                this.state.project.map((data) => {
                                    return (
                                        <div className='grid_item'>
                                            <div>
                                                <h2>Project: {data.id}</h2>
                                                <p>{data.description}</p>
                                            </div>
                                            <button onClick={() => { this.deleteProject(data.id) }} className='delete'>Delete</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TeamTask;