import React from 'react';
import HomeChoice from "../images/Screen Shot 2023-01-12 at 8.47.42 PM.png"
import Giveback from "../images/Screen Shot 2023-03-31 at 5.45.18 PM.png"
import Combat from "../images/Screen Shot 2022-10-20 at 3.40.22 PM.png"
import Swiftnews from "../images/Screen Shot 2022-08-21 at 8.44.28 PM.png"
import Resume from "../images/Screen Shot 2023-04-04 at 8.03.33 PM.png"









function Main(){
    return(  
   
        <div id="main">

            
                <section id="one">
                    <header class="major">
                        <h2>About Me<br />
                        </h2>
                    </header>
                    <p>Darrell spends his days curating a future already heavily invested in business development. Through great communication skills, business etiquette, established sales tactics and inviting interpersonal relationship skills, Darrell never ceases to bring life to any business venture. His works cannot be taken into full account unless coupled with the thought of his high personal standards, care for common man and above all his high regard for ethics and true grit.</p>

                </section>

            
                <section id="two">
                    <h2>Recent Work</h2>
                    <div class="row">
                        <article class="col-6 col-12-xsmall work-item">
                            <a href= "https://shawnbandy.github.io/SwiftNews/" class="image fit thumb"><img src={Swiftnews} alt="SwiftNews" /></a>
                            <h3>Swift News</h3>
                            <p>Swift News is a easy to access news website that uses multiple APIs from the New York Times to display the most popular news, the top stories of today, and other news articles. The articles are presented as an easy-to-read format, with their image, abstract, and title displayed per article.</p>
                        </article>
                        <article class="col-6 col-12-xsmall work-item">
                            <a href="https://giveback-app2.herokuapp.com/" class="image fit thumb"><img src={Giveback} alt="Giveback App" /></a>
                            <h3>Give Back App</h3>
                            <p>Charity app that utilizes Charity.com API and uses MERN framework.</p>
                        </article>
                        <article class="col-6 col-12-xsmall work-item">
                            <a href="https://homechoice.herokuapp.com" class="image fit thumb"><img src={HomeChoice} alt="Home Choice" /></a>
                            <h3>Home Choice</h3>
                            <p>This is a project that utilizes a Rapid API from US Real Estate to pull housing options for users then allowing them to calculate their mortage based on choices they choose in the housing survey they are provided. </p>
                        </article>
                        <article class="col-6 col-12-xsmall work-item">
                            <a href="https://github.com/leothoma88/CombatArena_Game" class="image fit thumb"><img src={Combat} alt="Combat Arena" /></a>
                            <h3>Combat Arena</h3>
                            <p>This is a full-stack project making use of Node.js and Express.js, MySQL and Sequelize, Handlebars.js for templating, GET & POST routes for adding and retrieving data, and Passport as a means of storing user login information. This respository adheres to the MVC paradigm for its file/folder structure. The app is deployed to Heroku or it can be cloned and run locally.</p>
                        </article>
                    </div>
                </section>

           
                <section id="three">
                    <h2>Get In Touch</h2>
                    <p>I'd love to work with you.</p>
                    <div class="row">
                        <div class="col-8 col-12-small">
                            <form method="post" action="#">
                                <div class="row gtr-uniform gtr-50">
                                    <div class="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                    <div class="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                    <div class="col-12"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                </div>
                            </form>
                            <ul class="actions">
                                <li><input type="submit" value="Send Message" /></li>
                            </ul>
                        </div>
                        <div class="col-4 col-12-small">
                            <ul class="labeled-icons">
                
                                <li>
                                    <h3 class="icon solid fa-mobile-alt"><span class="label">Phone</span></h3>
                                    404-702-9727
                                </li>
                                <li>
                                    <h3 class="icon solid fa-envelope"><span class="label">Email</span></h3>
                                    <a href="leothoma88@gmail.com">leothoma88@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

            
                <section id="four">
                <div class="col-6 col-12-xsmall">
                                <h5>Ordered</h5>
                                <ol>
                                    <li>Dolor pulvinar etiam magna etiam.</li>
                                    <li>Etiam vel felis at lorem sed viverra.</li>
                                    <li>Felis enim feugiat dolore viverra.</li>
                                    <li>Dolor pulvinar etiam magna etiam.</li>
                                    <li>Etiam vel felis at lorem sed viverra.</li>
                                    <li>Felis enim feugiat dolore viverra.</li>
                                </ol>
                                <h5>Icons</h5>
                                <ul class="icons">
                                    <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                                    <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                                    <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                                    <li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
                                    <li><a href="#" class="icon brands fa-tumblr"><span class="label">Tumblr</span></a></li>
                                </ul>
                            </div>
                    <h2>Resume</h2>
                    <a href={Resume} download><img class="image fit thumb"  id="first_project" alt="Resume"  src={Resume}></img></a>

                    

                </section>
            

        </div>
    )
}

export default Main

