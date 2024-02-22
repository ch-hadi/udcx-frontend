import React from 'react'

const CIcon = (props) => {
    return (
        <div style={{ height: 20, width: 20, marginRight: 5 }} onClick={props.onClick}>{props.icon}</div>
    )
}

export default CIcon