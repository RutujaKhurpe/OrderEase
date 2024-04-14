import React from 'react'
import logo from '../assest/tastyfood.jpg';
import './footer.css';
import {  useNavigate } from 'react-router-dom';

import Button from '@material-ui/core/Button'; // Import Button from Material-UI


function Footer() {
    const navigate = useNavigate(); // Define navigate


    const handleAdminLogin = () => {
        navigate('/adminlogin'); // Navigate to the "/auth" route
    };

    return (
        <div className='foot-root'>
            <div className='container-foot'>
                <img src={logo} alt="logo" />
                <h3>Tasty Food</h3>
                <p style={{ fontStyle: 'italic' }}>Personal project</p>
                <p style={{ fontStyle: 'italic' }}>Tools included React.js, <br />
                    Node.js , MySQL, Express.js</p>
            </div>
            <div className='container-foot'>
                <h4 style={{ marginBottom: '0px', marginTop: '0px' }}>Contact</h4>
                <p style={{ marginTop: '0px' }}>7892745266</p>
            </div>

            <div className='container-foot'>
                <h4 style={{ marginBottom: '0px', marginTop: '0px' }}>Email</h4>
                <p style={{ marginTop: '0px' }}>rutujakhurpe99@gmail.com</p>
            </div>

            <div className='container-foot'>
                <Button className='btn-foot' onClick={handleAdminLogin}>Admin Login</Button>
            </div>

        </div>
    )
}

export default Footer
