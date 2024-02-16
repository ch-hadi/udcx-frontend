import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "../../theme/MainTheme";
import CButton from "../CButton/CButton";

const CFooter = (props) => {
    const classes = useStyles();
    return <div style={{
        width: "100%",
        // borderBottom: '1px solid rgba(227, 225, 225, 0.5)',
        position: 'fixed',

        bottom: 0,
        // background: 'red',
        borderTop: '1px solid #F1F3F5'
    }}>
        <div className={classes.footerButtons}>
            <div>
                <Link onClick={() => props.setDeliverable(false)} to={'/'} className={classes.link}>Back</Link>
            </div>
            <div>
                <CButton onClick={() => props.onClick} backgroundColor='#2B579A' color='#fff' label='Generate' varient='contained' size='small' />
            </div>
        </div>
    </div>;
};

export default CFooter;
