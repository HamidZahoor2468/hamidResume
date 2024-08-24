import React from 'react';

const Skills = () => {
    return (
       
        <section id="skills" className="skills section light-background sectionDeatils px-lg-5 pt-5">
    
        
          <div className="container section-title" data-aos="fade-up">
            <h2>Skills</h2>
            <p>Proficient in multiple programming languages enabling web development. Skilled in crafting dynamic, responsive, and user-centric applications.</p>
          </div>
    
          <div className="container" data-aos="fade-up" data-aos-delay="100">
    
            <div className="row skills-content skills-animation">
    
              <div className="col-lg-6">
    
                <div className="progress">
                  <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>    

                <div className="progress">
                  <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill"><span>Bootstrap</span> <i className="val">90%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
    
                <div className="progress">
                  <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-6">
    
                <div className="progress">
                  <span className="skill"><span>react</span> <i className="val">50%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill"><span>PHP</span> <i className="val">70%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
    
                <div className="progress">
                  <span className="skill"><span>WordPress/CMS</span> <i className="val">90%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
    
              </div>
    
            </div>
    
          </div>
    
        </section>
    );
}


export default Skills;