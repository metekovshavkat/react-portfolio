import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
       <header id="mainhead">
        <div className="container">
            <a href="index.html" id="logo">Shavkat Metekov</a>
            <nav>
                <a href="index.html">About</a>
                <a href="portfolio.html">Portfolio</a>
                <a href="contact.html">Contact</a>
            </nav>
        </div>
    </header>

  
    <div id="main-content" className="container">
        <section className="main-section">
    
            <h2>About Me</h2>
            <div className="my-picture">
                <img src="assets/images/my-pic.JPG" alt="Shavkat Metekov"> </img> 
            </div>
            <div className="text-paragraph">
                <p>         
                    I am from Turkmenistan, Central Asia. 
                    Two years ago graduated Metropolitan State University with BAS in Computer Forensics. I like troubleshooting computer issues so I enjoy my work for the most part
                    I also love nature and looking for bugs. That is why I decided I will work with code and possibly get into developing positions at my work. If you are curious, 
                    I have seen snow before I came to Minnesota. Actually, we get cold temperature close to Minnesotan. However, extreme cold is colder in Minnesota and winter here is longer which makes it worse.
                        
                    I have been working with computers for a several years now. Mostly I do troubleshooting on different levels. Starting from "Have you tried turning it on and off" to
                    "What server are you trying to connect to?" I starting liking coding when I saw the show Mr Robot. Although he is not a programmer per se, but there are some things 
                    shown in that show that "trigger that portion of my brain."

                    <br /><br />
                    I have other interests and hobbies as well. For instance, I play guitar, like taking photographs of places and people,
                    and also pain and draw when I get a chance. Once I finish couple paintings I will upload them here. From sports I like to play
                    soccer. Right now, with quarantine, people are not out, but before it started I used to play at least once a week. Hopefully, soon in Summer things will get back to normal.

                    <br /><br>
                    In my professional life, I am planning to shift into Web Development in near future. I am, probably taking an interesting route
                    to get to where I want to be at because usually people are more decisive when it comes to career. When I was in school, I was interested
                    in security breaches (to some extend I still am), but then I double majored in Network Security that got me into CCNA and Network Admin roles,
                    Then I was put into support because I was eager to solve problems that puzzled developers as well as daily users. Now, my curiosity is taking
                    me into exploring programming and designing web pages as well as web applications. I am eager to learn more!
                 
                    <p />
    </div>
    <div>
    <footer>
        <div className="container">
            <p>Copyright© U of M Bootcamp project by Shavkat Metekov</p>
        </div>
    </footer>
    </div>
    );
    }
  }
export default App;
