import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis commodi ex non doloribus quae quo?
                    </p>
                </div>
                <div className="card-action grey-ligthen-4 grey-text">
                    <div>Posted by the Net Ninja</div>
                    <div>September 2nd, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
