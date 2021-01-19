import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
 
const Navigation = () => (

    <Menu mode="horizontal" selectable={false} theme="dark">
        <Menu.Item>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to={ROUTES.LANDING}>Landing</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to={ROUTES.HOME}>Home</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to={ROUTES.ADMIN}>Admin</Link>
        </Menu.Item>
    </Menu>

      
        
        
  

);
 
export default Navigation;