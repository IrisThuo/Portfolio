import React from 'react';
import './slider.css'
function Portfolio(props) {
    return (
        <div>
            <button>ReachMe</button>
            <h1>Latest projects</h1>

            <div id="parent-container">

            <div class="navigation-buttons">
            <div class="previous nav-btn"></div>
            <div class="next nav-btn"></div>
            </div>

            <div class="slider-carousel">
            <div class="Project main">
                <h5>Project title</h5>
                <p>project description</p>
                <h5>Live site</h5>
                <h5>Github link</h5>

                <h4>Tools</h4>
            </div>
            <div class="projects">
                <h5>Project title</h5>
                <p>project description</p>
                <h5>Live site</h5>
                <h5>Github link</h5>

                <h4>Tools</h4>
            </div>
            <div class="projects">
                <h5>Project title</h5>
                <p>project description</p>
                <h5>Live site</h5>
                <h5>Github link</h5>

                <h4>Tools</h4>
            </div>
          </div>

            </div>

        </div>
    );
}

export default Portfolio;
