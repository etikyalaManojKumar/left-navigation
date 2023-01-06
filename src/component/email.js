import React, { Component } from 'react';
import { Members } from '../mock';
class Email extends Component {
    state = {}
    render() {
        return (
            <>
               <div className='main-container'>
        <form>
            <label>From :</label>
            <input placeholder='Enter your email id' type='email'/>
            <label>To :</label>
            <select>
           {
            Members.map((item,index)=>{
                return(            
                    <option key={index}>{item.email}</option>
                )
            })
           }
             </select>
            <label>Subject :</label>
            <textarea/>
            <label>Email body :</label>
            <textarea/>
            <button className='btn'>OK</button>
        </form>
      </div>
            </>
        );
    }
}
export default Email;