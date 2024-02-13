import React from 'react'

const CenteredContainer = (props) => {
    return (
        <div style={{ width: props.width ? props.width : 300 }}></div>
    )
}

export default CenteredContainer