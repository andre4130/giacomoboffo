import React, { Fragment, useState, useEffect } from 'react';
import 



const Projects = ({ data }) => {

    const [mousePosition, setMousePosition] = useState({ x: null, y: null, width:'' });
    const [arrow, setArrow] = useState('')

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
                            <img key={project.id} src={project.acf.image} alt="" />
                        )}
                    </div>
                }
            </div>
        </Fragment>

    )
};

export default Projects;