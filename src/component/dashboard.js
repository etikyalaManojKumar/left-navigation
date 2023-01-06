import React, { Component } from 'react';
import Header from './header';
import Email from './email';
import { details } from '../mock';
import { Route, Routes, Link } from 'react-router-dom'

class Dashboard extends Component {
    state = {
        projectText: '',
        announcementText: '',
        project: [],
        announcement: [],
        projectId: 1,
        announcementId: 1
    }
    textAreaChange = (e) => {
        const textareavalue = e.target.value
        this.setState({ ...this.state, projectText: textareavalue })

    }
    handleAnnouncement = (e) => {
        const textareavalue = e.target.value
        this.setState({ ...this.state, announcementText: textareavalue })
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

    addAnnouncement = () => {
        const annDetails = this.state.announcement
        const textareavalue = this.state.announcementText
        const newdetails = {
            id: this.state.announcementId,
            description: textareavalue
        }
        annDetails.push(newdetails)
        this.setState({
            ...this.state,
            announcement: annDetails,
            announcementId: this.state.announcementId + 1,
            announcementText: ''
        })
    }
    deleteAnnc = (anncId)=>{
        const annc = this.state.announcement.filter((data)=>{return data.id !== anncId})
        this.setState({...this.state, announcement: annc})
    }
    render() {
        return (
            <>
                <div className='main_div'>
                    <div className='section_div'>
                        <div className='section_head'>
                            <span>Team Tasks</span>
                            <div>

                                <textarea name="" id="" cols="60" rows="3" value={this.state.projectText} onChange={this.textAreaChange}></textarea>
                                <button className='saveBtn' onClick={this.addProject}>Add</button>
                            </div>
                        </div>
                        <div className='grid_container'>
                            {
                                this.state.project.map((data) => {
                                    return (
                                        <div className='grid_item'>
                                            <div>
                                            <h2>Task: {data.id}</h2>
                                            <p>{data.description}</p>
                                            </div>
                                            <button onClick={()=>{this.deleteProject(data.id)}} className='delete'>Delete</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='section_div'>
                        <div className='section_head'>
                            <span>Team Announcement</span>
                            <div>

                                <textarea name="" id="" cols="60" rows="3" value={this.state.announcementText} onChange={this.handleAnnouncement}></textarea>
                                <button className='saveBtn' onClick={this.addAnnouncement}>Post</button>
                            </div>
                        </div>
                        <div className='grid_container'>
                            {
                                this.state.announcement.map((data) => {
                                    return (
                                        <div className='grid_item'>
                                            <div>
                                            <h2>Announcement: {data.id}</h2>
                                            <p>{data.description}</p>
                                            </div>
                                            <button onClick={()=>{this.deleteAnnc(data.id)}} className='delete'>Delete</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='pointof_contact'>
                        <div className='section_head'>
                            <span>Point of Contact</span>
                        </div>
                        <div>
                            {details.map((data) => {
                                return (
                                    <>
                                        <p className='para'>DM: <>{data.dm_name}</>(<a href='#'>{data.dm_mail}</a>)</p>
                                        <p className='para'>PM: <>{data.pm_name}</>(<a href='#'>{data.pm_mail}</a>)</p>
                                        <p className='para'>Lead: <>{data.lead_name}</>(<a href='#'>{data.lead_mail}</a>)</p>
                                    </>
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

export default Dashboard;