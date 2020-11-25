import React from 'react';

const About = ({ clients }) => {


    return (
        <div className="container-fluid about-container">
            <div className="row">
                <div className="col-4 side-col"></div>
                <div className="col-4 about-section">
                    <p>Giacomo Boffo (1987) is a freelance designer and researcher who works internationally to offer graphic design services.</p>
                    <p>After studying Visual Communication at ISIA Urbino (IT), he went on to complete a MA in Graphic Design at AKV St.Joost Breda (NL). After moving to Rotterdam, he started freelancing and collaborated with various local art and design institutions, among which Open Set. He worked as designer at Folch in Barcelona, and at La Scuola Open Source in Bari as designer in residence and researcher.
                    </p>
                    <div className="row">
                        <div className="col-6 cv">
                            <h6>CONTACT & FOLLOW</h6>
                            <p>
                                <a href="mailto:giacboffo@gmail.com" target="_blank" rel="noreferrer">giacboffo@gmail.com</a>
                                <br />
                                <a href="https://www.instagram.com/boffogiacomo/" target="_blank" rel="noreferrer">Instagram</a>
                                <br />
                                <a href="https://www.linkedin.com/in/giacomo-boffo-30097129/" target="_blank" rel="noreferrer">Linkedin</a>
                            </p>
                        </div>
                        <div className="col-6 clients">
                            <h6>SELECTED CLIENTS</h6>
                            <div className="client-list">
                                <ul>
                                    {!clients.clients.length
                                        ? <div>is loading...</div>
                                        :
                                        <div className='client-list'>
                                            {clients.clients.map(client =>
                                                <div key={client.id}>
                                                    <li>{client.acf.client_name}</li>
                                                </div>
                                            )}
                                        </div>
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-4 side-col"></div>
            </div>
        </div>
    );
};

export default About;