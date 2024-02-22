import React from 'react';
import { Link } from 'react-router-dom';
import { RectangleGroupIcon } from '@heroicons/react/24/solid'
import './Sidebar.css'
import CIcon from '../CIcon/CIcon';
import { useTheme } from '@mui/material/styles';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Logout from '../../Pages/Auth/Logout';

const Sidebar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    // const onClickProp = () => {
    //     setAnchorEl(event.currentTarget);
    // }

    const theme = useTheme();
    return (
        <div className='sidebar'>
            <div className='heading'>
                <p style={{ fontSize: 40, fontWeight: 500, color: '#2B579A' }}>µDocx</p>
            </div>
            <ul className='sidebar-menu'>
                {/* <li> */}
                <Link className='li' style={{ color: '#2B579A', textDecoration: 'none', display: 'flex', fontSize: 13 }} to="/create-deliverable">

                    <CIcon icon={<RectangleGroupIcon style={{}} />} /> Templates</Link>
            </ul>
            <div className='profile'>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', padding: '20px 0px', justifyContent: 'center' }}>
                    <div>
                        <img
                            style={{ height: 35, borderRadius: 25 }}
                            src="./assets/images/profile.png"
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '0px 15px' }}>
                        <p className='title'>Nicolas Fry</p>
                        <p> Admin</p>
                    </div>
                    <div style={{ width: "30px", color: 'rgb(184, 180, 180)', cursor: 'pointer' }}>
                        <CIcon icon={<EllipsisHorizontalIcon />} onClick={handleClick} />
                    </div>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <Logout />
                    </Popover>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
