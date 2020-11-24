import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';



const Projects = ({ data }) => {

    const [mousePosition, setMousePosition] = useState({ x: null, y: null, width: '' });
    const [arrow, setArrow] = useState('');
    const { id } = data;

    const updateMousePosition = ev => {
        var width = window.innerWidth;
        setMousePosition({ x: ev.clientX, y: ev.clientY, width: width });
    }
    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);

    }, []);



    return (
        <Fragment>
            <div className="container-fluid pt-5"
                onMouseOver={updateMousePosition}
            >
                {!data.projects.length
                    ? null
                    :
                    <div className="left">
                        {data.projects.map(project =>
                            <div key={project.id}>
                                <img  src={project.acf.image} alt="" />
                                <div className="">
                                <div dangerouslySetInnerHTML={{ __html: project.excerpt.rendered }}>
                                </div><a href={project.acf.link}>{project.id}</a>
                                </div>
                    
                                

                                {/* <Link to={`/project/${id}`}>{}</Link> */}
                            </div>

                        )}
                    </div>
                }
            </div>
        </Fragment>

    )
};

const Mouse = styled.div`
    background-image: url(${props => props.bio})
    `;


export default Projects;