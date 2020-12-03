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
            <div className={`container-fluid projects ${arrow}`}
                onMouseOver={updateMousePosition}
            >
                {/*set here the breakpoints for the scaling of the image*/}
                {!data.length
                    ? <div className="loading">
                        <div className="row">
                            <div className="col-12">
                                <h1>Giacomo Boffo</h1>
                            </div>
                            <div className="col-12">
                                <h3>Graphic Design & Art Direction</h3>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={`carousel-div ${arrow}`}>
                        <Carousel autoPlay={false} fade={true} interval={null} indicators={false}>
                            {data.map(project =>
                                <Carousel.Item key={project.id}>
                                    <img
                                        className="d-block"
                                        src={project.image.default}
                                        alt={project.slug}
                                    />
                                    <div className="caption">{project.description}</div>
                                         {/* <Carousel.Caption>
                                        {project.acf.description}
                                    </Carousel.Caption> */}
                                </Carousel.Item>

                            )}
                        </Carousel>
                    </div>
                }
            </div>
        </Fragment>

    )
};



export default Projects;

