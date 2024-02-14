import React from 'react';
import { Link } from 'react-router-dom';
import { BeakerIcon, RectangleGroupIcon } from '@heroicons/react/24/solid'
import './Sidebar.css'
import CIcon from '../CIcon/CIcon';
import { useTheme } from '@mui/material/styles';

const Sidebar = () => {
    const theme = useTheme();
    return (
        <div className='sidebar'>
            <div className='heading'>
                <p style={{ fontSize: 40, fontWeight: 500, color: '#2B579A' }}>µDocx</p>
            </div>
            <ul className='sidebar-menu'>
                {/* <li> */}
                <Link className='li' style={{ color: '#2B579A', textDecoration: 'none', display: 'flex', fontSize: 13 }} to="/users">

                    <CIcon icon={<RectangleGroupIcon style={{}} />} /> Templates</Link>
                {/* </li> */}
                {/* <li> */}
                <Link className='li' style={{ textDecoration: 'none' }} to="/products">Products</Link>
                {/* </li> */}
            </ul>
            <div className='profile'>
                <div>
                    <img
                        style={{ height: 24, borderRadius: 15 }}
                        src="./assets/images/user.png"
                    />
                </div>
                <div style={{}}>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;
