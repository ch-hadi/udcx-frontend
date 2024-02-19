import React from 'react';
import { Link } from 'react-router-dom';
import { RectangleGroupIcon } from '@heroicons/react/24/solid'
import './Sidebar.css'
import CIcon from '../CIcon/CIcon';
import { useTheme } from '@mui/material/styles';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
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
                {/* </li> */}
                {/* <li> */}
                {/* <Link className='li' style={{ textDecoration: 'none' }} to="/products">Products</Link> */}
                {/* </li> */}
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
                        <CIcon icon={<EllipsisHorizontalIcon />} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
