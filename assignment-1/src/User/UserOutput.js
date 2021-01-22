import React from 'react';

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>1st Para - {props.username}</p>
            <p>2nd Para</p>
        </div>
    );
}

export default userOutput;