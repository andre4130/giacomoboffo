import React, { Fragment, useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const Projects = ({ data }) => {

    const [projects, setProjects] = useState([])

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
                <div className={`carousel-div ${arrow}`}>
                    <Carousel autoPlay={false} fade={false} interval={null} indicators={false}>
                        {data.map((project, i) =>
                            <Carousel.Item key={project.id}>
                                <img
                                    className="d-block w-100"
                                    src={project.image.default}
                                    alt={project.slug}
                                />
                                    <Carousel.Caption className="caption" dangerouslySetInnerHTML={{ __html: project.description}}>
                                        {/* {project.description} */}
                                    </Carousel.Caption>

                            </Carousel.Item>
                        )}
                    </Carousel>
                </div>
            </div>
        </Fragment>

    )
};

export default Projects;

