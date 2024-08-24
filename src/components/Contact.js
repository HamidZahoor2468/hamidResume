import React, {useEffect} from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - Hamid Zahoor";
}, []);
    return (
      
        <section id="contact" className="contact section sectionDeatils px-lg-5 pt-5">
    
     
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>I am ready to provide the services you need. Feel free to reach out at any time.</p>
    
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
    
            <div className="row gy-4">
    
              <div className="col-lg-5">
    
                <div className="info-wrap">
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h3>Address</h3>
                      <p>Lahore, Pakistan</p>
                    </div>
                  </div>
    
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                    <i className="bi bi-telephone flex-shrink-0"></i>
                    <div>
                      <h3>Call Us</h3>
                      <p>+92-308-3264881</p>
                    </div>
                  </div>
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                    <i className="bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h3>Email Us</h3>
                      <p>hamidzahoor2468@gmail.com</p>
                    </div>
                  </div>
    
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27246.93818000575!2d74.3689833!3d31.5849905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191ac38818005f%3A0xe1612460de0fb770!2sBaghbanpura%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" 
    frameborder="0" allowfullscreen="" loading="lazy" className="iframee" 
    referrerpolicy="no-referrer-when-downgrade" 
    title="Google Maps location of Baghbanpura, Lahore"></iframe>
                </div>
              </div>
    
              <div className="col-lg-7">
                <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                  <div className="row gy-4">
    
                    <div className="col-md-6">
                      <label for="name-field" className="pb-2">Your Name</label>
                      <input type="text" name="name" id="name-field" className="form-control" required=""/>
                    </div>
    
                    <div className="col-md-6">
                      <label for="email-field" className="pb-2">Your Email</label>
                      <input type="email" className="form-control" name="email" id="email-field" required=""/>
                    </div>
    
                    <div className="col-md-12">
                      <label for="subject-field" className="pb-2">Subject</label>
                      <input type="text" className="form-control" name="subject" id="subject-field" required=""/>
                    </div>
    
                    <div className="col-md-12">
                      <label for="message-field" className="pb-2">Message</label>
                      <textarea className="form-control" name="message" rows="10" id="message-field" required=""></textarea>
                    </div>
    
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>
    
                      <button type="submit">Send Message</button>
                    </div>
    
                  </div>
                </form>
              </div>
    
            </div>
    
          </div>
    
        </section>
      );
}



export default Contact;