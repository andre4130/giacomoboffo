import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { Carousel } from 'react-bootstrap'



const Projects = ({ data }) => {

    const [mousePosition, setMousePosition] = useState({ x: null, y: null, position: '' });

    const updateMousePosition = ev => {
        var width = window.innerWidth;
        setMousePosition({ x: ev.clientX, y: ev.clientY, position: (width / 2 - ev.clientX) });

    }
    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);

    }, []);

    var arrow = '';
    mousePosition.position < 0 ? arrow = 'right' : arrow = 'left';
    return (
        <Fragment>
            <div className="container-fluid projects pt-5"
                onMouseOver={updateMousePosition}
            >
                {!data.projects.length
                    ? <div>is loading...(here will be set the welcome container)</div>
                    :

                    <div className={`carousel ${arrow}`}>
                        <Carousel>
                            {data.projects.map(project =>
                                // <div key={project.id}>
                                //     <img src={project.acf.image} alt="" />
                                //     <div className="">
                                //         <div dangerouslySetInnerHTML={{ __html: project.excerpt.rendered }}>
                                //         </div><a href={project.acf.link} target='_blank' rel='noreferrer'>{project.id}</a>
                                //     </div>
                                <Carousel.Item key={project.id}>
                                    <img
                                        className="d-block w-100"
                                        src={project.acf.image}
                                        alt={project.slug}
                                    />
                                    {/* <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption> */}
                                </Carousel.Item>
                                // </div>
                            )}
                        </Carousel>
                    </div>
                }
            </div>
        </Fragment>

    )
};



export default Projects;

