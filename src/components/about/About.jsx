import React from 'react';

const About = ({ clients, experience, prizes }) => {


    return (
        <div className="container-fluid about-container">
            <div className="row">
                <div className="col-lg-4 side-col"></div>
                <div className="col-lg-4 mt-5 mt-lg-0 about-section">
                    <p>Giacomo Boffo (1987) is a freelance designer and researcher who works internationally to offer graphic design services.</p>
                    <p>After studying Visual Communication at ISIA Urbino (IT), he went on to complete a MA in Graphic Design at AKV St.Joost Breda (NL). After moving to Rotterdam, he started freelancing and collaborated with various local art and design institutions, among which Open Set. He worked as designer at Folch in Barcelona, and at La Scuola Open Source in Bari as designer in residence and researcher.
                    </p>
                    <div className="row">
                        <div className='col-lg-6 pl-1'>
                            <div className="col-12 cv">
                                <h6>CONTACT & FOLLOW</h6>
                                <p>
                                    <a href="mailto:giacboffo@gmail.com" target="_blank" rel="noreferrer">giacboffo@gmail.com</a>
                                    <br />
                                    <a href="https://www.instagram.com/boffogiacomo/" target="_blank" rel="noreferrer">Instagram</a>
                                    <br />
                                    <a href="https://www.linkedin.com/in/giacomo-boffo-30097129/" target="_blank" rel="noreferrer">Linkedin</a>
                                </p>
                            </div>
                            <div className="col-12 cv">
                                <h6>WORK & TEACHING EXPERIENCE, STUDIES</h6>
                                <div className="client-list">
                                    {!experience.length
                                        ? <div>is loading...</div>
                                        :
                                        <div className='client-list'>
                                            {experience.map(work =>
                                                <div key={work.date}>
                                                    {work.date}
                                                    <br />
                                                    {work.experience}
                                                    <p></p>
                                                </div>
                                            )}
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 clients">
                            <div className="col-12 cv">
                                <h6>SELECTED CLIENTS</h6>
                                <div className="client-list">
                                    <div className='client-list'>
                                        {clients.map(client => 
                                            <div>{client.client}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 cv">
                                <h6>EVENTS & PRIZES</h6>
                                <div className="client-list">
                                    {!prizes.length
                                        ? <div>is loading...</div>
                                        :
                                        <div className='client-list'>
                                            {prizes.map(event =>
                                                <div key={event.date}>
                                                    {event.date}
                                                    <br />
                                                    {event.prize}
                                                    <p></p>
                                                </div>
                                            )}
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 side-col"></div>
                </div>
            </div>
        </div>
    );
};

export default About;