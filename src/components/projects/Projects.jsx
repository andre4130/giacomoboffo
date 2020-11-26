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
            <div className={`container-fluid projects pt-5 ${arrow}`}
                onMouseOver={updateMousePosition}
            >
                <div className="row">
                    <div className="">
                        {/*set here the breakpoints for the scaling of the image*/}
                    {!data.projects.length
                        ? <div>is loading...(here will be set the welcome container)</div>
                        :

                        <div className={`carousel ${arrow}`}>
                            <Carousel autoPlay={false} fade={true} interval={null}>
                                {data.projects.map(project =>
                                    <Carousel.Item key={project.id}>
                                        <img
                                            className="d-block w-100"
                                            src={project.acf.image}
                                            alt={project.slug}
                                        />
                                        <Carousel.Caption className="caption">
                                            <p>{project.acf.project_description} {project.acf.haslink === 'Yes' ? <span>At <a href={project.acf.link} target='_blank' rel="noreferrer">{project.acf.company_name}</a></span> : null}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )}
                            </Carousel>
                        </div>
                    }
                    </div>
                    
                </div>
            </div>
        </Fragment>

    )
};



export default Projects;

