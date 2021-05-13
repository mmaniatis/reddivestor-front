import './About.css';

function About() {
    return (
    <div className="content-container">
        <div className="about">

        <div className="card">
            <div className="container">
                <h4><b>What we do</b></h4>
                <p>
                    This app tracks the mentions of Crypto Currencies on Reddit 
                    and cross references them with the current top 2500 coins.
                    
                </p>
            </div>
        </div>

        <div className="card">
            <div className="container">
                <h4><b>Why we did it</b></h4>
                <p>To save you time when trying to find the hottest Crypto Currencies!</p>
            </div>
        </div>
        <div className="card">
            <div className="container">
                <h4><b>What's coming</b></h4>
                <p>Public API, live pricing info, and more.
                </p>
            </div>
        </div>

        <div className="card">
            <div className="container">
                <h4><b>Tech stack</b></h4>
                <p>(Python Crawler + MongoDB) - /*Java 8*/ Spring Boot API - React JS</p>
            </div>
        </div>
        </div>
    </div>
    );
  }
  
  export default About;