import React, { useEffect } from 'react';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

const Portfolio = () => {
  useEffect(() => {
    const elem = document.querySelector('.isotope-container');
    imagesLoaded(elem, () => {
        const isotope = new Isotope('.isotope-container', {
            itemSelector: '.isotope-item',
            layoutMode: 'masonry',
            filter: '*'
        });

        const filtersElem = document.querySelector('.portfolio-filters');
        filtersElem.addEventListener('click', (event) => {
            if (!event.target.matches('li')) {
                return;
            }
            const filterValue = event.target.getAttribute('data-filter');
            isotope.arrange({ filter: filterValue });
            filtersElem.querySelector('.filter-active').classList.remove('filter-active');
            event.target.classList.add('filter-active');
        });

        return () => {
            isotope.destroy();
        };
    });
}, []);

    return (
        <section id="portfolio" className="portfolio section light-background sectionDeatils px-lg-5 pt-5">
            <div className="container section-title" data-aos="fade-up">
                <h2>Portfolio</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="container">
                <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                    <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-Bootstrap">Bootstrap</li>
                        <li data-filter=".filter-Front-End">Front-End</li>
                    </ul>

                    <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-Front-End">
                            <div className="portfolio-content h-100">
                                <img src="/img/portfolio/portfolio (3).png" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Front-end</h4>
                                    <p>Hardware Shop</p>
                                    <a href="https://hamidzahoor2468.github.io/hardware_Shop/" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link" target="_blank" rel="noopener noreferrer"><i className="bi bi-zoom-in"></i></a>
                                    <a href="https://hamidzahoor2468.github.io/hardware_Shop/" title="More Details" className="details-link" target="_blank" rel="noopener noreferrer"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-Bootstrap">
                            <div className="portfolio-content h-100">
                                <img src="/img/portfolio/portfolio (2).png" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Bootstrap</h4>
                                    <p>Themebau.</p>
                                    <a href="https://hamidzahoor2468.github.io/Themebau-Bootstrap/" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link" target="_blank" rel="noopener noreferrer"><i className="bi bi-zoom-in"></i></a>
                                    <a href="https://hamidzahoor2468.github.io/Themebau-Bootstrap/" title="More Details" className="details-link" target="_blank" rel="noopener noreferrer"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-Front-End">
                            <div className="portfolio-content h-100">
                                <img src="/img/portfolio/portfolio (1).png" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Front-end</h4>
                                    <p>Parrot Os</p>
                                    <a href="https://hamidzahoor2468.github.io/Parrot-OS-HTML-CSS-JS-Front-end-poject/" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link" target="_blank" rel="noopener noreferrer"><i className="bi bi-zoom-in"></i></a>
                                    <a href="https://hamidzahoor2468.github.io/Parrot-OS-HTML-CSS-JS-Front-end-poject/" title="More Details" className="details-link" target="_blank" rel="noopener noreferrer"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
