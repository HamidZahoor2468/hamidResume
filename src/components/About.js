import React, {useEffect} from 'react';
import '../App.css';
import Skills from './Skills';

const About = (props) => {
  useEffect(() => {
    document.title = "About - Hamid Zahoor";
}, []);
    return (
        <>
          <section id="about" className="about section sectionDeatils px-lg-5 pt-5">
      
          
            <div className="container section-title" data-aos="fade-up">
              <h2>About</h2>
              <p>Hi! I am <b>Hamid</b> a <b>Software Engineering</b> with a strong focus on <b>Web Development</b>.I used a variety of languages for both front-end and back-end development, and I also utilize WordPress to serve my clients effectively.</p>
            </div>
  
            <div className="container" data-aos="fade-up" data-aos-delay="100">
      
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-4">
                  <img src={props.profileImg} className="img-fluid" alt=""/>
                </div>
                <div className="col-lg-8 content">
                  <h2>Web Designer &amp; Web Developer.</h2>
                  <p className="fst-italic py-3">
                  Web developer with more than three years of experience on different platforms and in customer service. Self-motivated, proficient in handling multiple tasks,and always looking for new ways to exceed customers' expectations.
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>10 October 2002</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span><a href="https://dev-xunnydesigns.pantheonsite.io/" className="facebook" target="_blank" rel="noopener noreferrer">www.xunnydesigns.com</a></span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+93 308 3264881</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Lahore, Pakistan</span></li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Undergraduated</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>hamidzahoot2468@gmail.com</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                      </ul>
                    </div>
                  </div>
                  <p className="py-3">
                  I have expertise in HTML, CSS, and JavaScript for creating responsive interfaces, and I use Bootstrap and Tailwind for design. I'm skilled in JSX and React for building dynamic applications, and I have experience with PHP and WordPress for back-end development and content management. 
                  </p>
                </div>
              </div>
      
            </div>
      
          </section>
          <Skills/>
         </>
      );
}



export default About;