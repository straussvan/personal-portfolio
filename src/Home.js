import React from 'react';
import Fade from 'react-reveal/Fade';
import yosemite from "./images/yosemite.jpg";
import zionblog from "./images/zionblog.jpg";

const Home = () => {
     
        return (

            <div className="container">
                <div className="topHome">
                    <Fade delay={1000} bottom cascade>
                    <h1>Hello! My name is Strauss.</h1>
                    <h1>I'm a fullstack developer, and a design enthusiast.</h1>
                    <h1>Welcome to my page.</h1>
                    </Fade>
                    <br></br>
                    <Fade delay={2000} bottom cascade>
                    <h1 className="bottomTopHome">My creations ↓</h1>
                    </Fade>
                </div>
                <div className="lower1Home">
                    <div className="innerLower">
                        <h1>The National Park App</h1>
                        <a href = "http://mynppassport.surge.sh/" target="_blank"> check it out!</a>
                            <br></br>
                    </div>        
                </div>
                <div className="lower2Home">
                    <p>I wanted to create an application where users could make a bucket list of National Parks that they wanted to visit, view all the necessary travel information, and keep a personal passport of National Parks they have visited. It utilizes an API created by the National Park Service. It currently displays all of Utahs National Parks with information such as directions, notable park information, and other fun facts.</p>
                    <br></br>
                    <img src={yosemite} alt=""/>
                </div>
                <div className="midHome1">
                    <div className="innerMid">
                        <h1>Group Blog Project</h1>
                    </div>
                </div>
                <div className="midHome2">
                    <p>A couple classmates and I created a blog using the MERN stack. It allowed the user to upload photos and general posts. I'm currently adding authentication and more functionality to this project. </p>
                    <br></br>
                    <img src={zionblog} alt=""/>
                </div>
                <div className="bottomHome1">
                    <h1>The rest of the story</h1>
                    <br/>
                    <br/>
                    <Fade left>
                        <h1>Get in touch!</h1>
                    </Fade> 
                </div>
                <div className="bottomHome2">
                    <p>I'm currently working on some dream projects that I will have finished next year and I'm excited to be invovled and contribute to the world of programming.
                    <br/>
                    <br/>
                    When I'm not learning about code I'm rock climbing, eating all the good food, working on my Jeep Cherokee, fishing with my fiancée, and diving into immersive video game worlds. </p>
                    <a href = "https://github.com/straussvan" target="_blank">github</a>
                    <br/>
                    <a href = "https://www.linkedin.com/in/strauss-van-wagenen-7631a615a/" target="_blank">linkedin</a>
                    <br/>
                    <a href = "https://docs.google.com/document/d/1mNhq16vUIwoyGftCy7sYlFsXiBfuBZyyc9PFEVFLcn0/edit?usp=sharing" target="_blank">resume</a>  
                </div>
            </div>
        );
    
}

export default Home;
                