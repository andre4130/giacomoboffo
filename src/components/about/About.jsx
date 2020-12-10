import React from 'react';

const About = ({ clients, experience, prizes }) => {


    return (
        <div className="container-fluid about-container">
            <div className="row">
                <div className="col-lg-4 col-xl-3 side-col"></div>
                <div className="col-lg-4 col-xl-6 mt-5 mt-lg-0 ml-xl-5 about-section">
                    <p>Giacomo Boffo (1987) is a graphic designer and art director who works internationally to provide services in branding, digital and print across the sectors of culture, commerce, arts and design.</p>
                    <p>His experience in international agencies such as Folch and Apartamento, alongside a multiannual freelance experience between The Netherlands, Spain and Italy, has refined a method based on the combination of conceptual drive and attention to detail. He believes in a content-first approach and in close collaboration with the client as key factors to deliver compelling and meaningful design work. Alongside commissions, he engages with self-initiated projects and he is a guest teacher at La Scuola Open Source.
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
                                <h6>EXPERIENCE</h6>
                                <div className="client-list">
                                    {!experience.length
                                        ? <div>is loading...</div>
                                        :
                                        <div className='client-list'>
                                            {experience.map((work,i) =>
                                                <div key={i}>
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
                                        {/* {clients.map(client =>
                                            <div>{client.client}</div>
                                        )} */}
                                        <p>Barcelona Design Week, Conversas Barcelona, Darial, Dream Magazine, Fidelio Orchestra London, Fundación Arquia, Hermanos Vinagre, La Capella Barcelona, La Scuola Open Source, Marset, Vitra, Open Set, Witte de With Center for Contemporary Art, Underbau, Iittala, Lava Amsterdam, Secret Art Cinema  Rotterdam, Teatro Off Bari</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 cv">
                                <h6>AWARDS</h6>
                                <div className="client-list">
                                    {!prizes.length
                                        ? <div>is loading...</div>
                                        :
                                        <div className='client-list'>
                                            {prizes.map((event, i) =>
                                                <div key={i}>
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
                            <div className="col-12 cv">
                                <h6>WEBSITE CREDITS</h6>
                                <div className="client-list">
                                    {!prizes.length
                                        ? <div>is loading...</div>
                                        :
                                        <div className='client-list'>
                                                <div>
                                                    Design Giacomo Boffo
                                                    <p>Code <a href="https://itsmeandre.com">André de Mendonça Maia</a></p>
                                                </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 xl-3 side-col"></div>
                </div>
            </div>
        </div>
    );
};

export default About;