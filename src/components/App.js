import React, { Component } from 'react';
import Projects from './Projects'
import SocialProfiles from './SocialProfiles'
import profile from '../assets/profile.png';
import Title from './Title'
import '../index.css';
import Header from './Header'

class App extends Component {
    state = {displayBio:false};

    toggleDisplayBio =()=>{
        this.setState({
            displayBio:!this.state.displayBio
        })
    }
    
    render =()=>{

        return (
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hello..</h1>
                <p>My name is amruta. I am software Engineer</p>
                <Title/>
                <p>I always looking forward to eorking on meaningful projects</p>
                
                {this.state.displayBio?(
                <div>
                    <p>I live in Nashik, and code every day.</p>
                    <p>My Fav Lang is JS, and I think React,js is awsome</p>
                    <p>Besides coading I also love Music and ramen!</p>
                    <button onClick={this.toggleDisplayBio}>Show Less</button>
                </div>):(
                <div>
                    <button onClick={this.toggleDisplayBio}>Read More..</button>
                </div>
        )}
            <hr/>
            <Projects/>
            <hr/>
            <SocialProfiles/>
            </div>
        )
    }
}



export default App;
