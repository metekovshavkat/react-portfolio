import React, {Component} from 'react';


class Portfolio extends React.Component {
    render(){
        return(
                // {/* <!-- Main Content of Portfolio --> */}
    <div id="main-content" class="container">
        <section class="main-section">
                
            <h2>Portfolio</h2>
            {/* <!-- Pictures --> */}
            <div class="my-picture">
            <a href="https://github.com/metekovshavkat"><img src="./assets/images/github-logo.png" /></a>
        
            </div>
            <div class="text-paragraph">
                    <p>         
                    Please connect with me on <a href ="https://www.linkedin.com/in/shavkatmetekov/">LinkedIn</a> 
                    as well as follow on <a href="https://github.com/metekovshavkat">GitHub</a> where you can see 
                    my coding projects and repositories. My skills include but not limited to CSS, java script, 
                    node.js, jQuery, APIs, Ajax, ES6+, Express, SQL, ORM, CRUD, MongoDB, Mongoose, and more.
                    <br /> <br />
                    I always look forward to share my experience as well as learn new skills and make new connections. 
                    If you are trying to explore aforementioned tools and all and you need little help, let me know. 
                    We can collaborate on new projecs. 
                    <br /><br />
                    Feel free to take a look at my 
                    <a href ="https://drive.google.com/file/d/17P7gDr5018f-_folt4VF6pNFDmDVVPge/view?usp=sharing">resume</a>
                    and contact me with any questions you may have.
        
                            </p>

            </div>
        </section>

    </div>

        )
    }
}

export default Portfolio;