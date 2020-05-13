import React, {Component} from 'react';


class Contact extends React.Component{
    render (){
        return (
    <div id="main-content" class="container">
        <section class="main-section">
            <h1>Contact</h1>

            
            <form action="mailto:metekov.shavkat@gmail.com" method="get" enctype="text/plain" />

                
                
                    <label for="name">Name</label>
                    <input type="text" id="name" name="user_name" placeholder="John Smith"/>

                    <label for="email">Email</label>
                    <input type="email" id="email" name="user_email" placeholder="youremail@gmail.com" />

                    <label for="message">Message</label>
                    <textarea id="message" name="user_message"></textarea>
                

                <button type="submit">Submit</button>


            </section>
            </div>
        )
    }
}

export default Contact;