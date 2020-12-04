import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { Carousel } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

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
                {!data.projects.length
                    ?
                    <CSSTransition
                    in={data.isLoaded}
                    timeout={2000}
                    className="loading"
                    >
                  <div className="loading">
                        <div className="row">
                            <div className="col-12">
                                <h1>Giacomo Boffo</h1>
                            </div>
                            <div className="col-12">
                                <h3>Graphic Design & Art Direction</h3>
                            </div>
                        </div>
                    </div>
                
                    </CSSTransition>
                    :
                    // <CSSTransition
                    // in={data.isLoaded}
                    // timeout={1000}
                    // className='carousel-div'
                    // >
                    <div className={`carousel-div ${arrow}`}>

                        <Carousel autoPlay={false} fade={false} interval={null} indicators={false}>
                            {data.projects.map(project =>
                                <Carousel.Item key={project.id}>
                                    <img
                                        className="d-block w-100"
                                        src={project.acf.image.url}
                                        alt={project.slug}
                                    />
                                    <Carousel.Caption className="caption">
                                        {project.acf.description}
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </div>
                    // </CSSTransition>
                }

            </div>

        </Fragment>

    )
};



export default Projects;

