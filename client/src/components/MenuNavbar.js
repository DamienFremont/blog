import React from 'react';
import { Nav, Navbar, NavItem, Button, NavbarBrand, } from 'reactstrap';
import avatar from './MenuNavbar-avatar.png';
import { FormattedMessage } from 'react-intl';

const MenuNavbar = (props) => {

    const isLoggedIn = () => false;

    const renderPublicBar = () => (
        <span>
            <Button color="light" className="mr-1">
                <FormattedMessage id="MenuNavbar.signin" />
            </Button>
            <Button color="primary" className="mr-1">
                <FormattedMessage id="MenuNavbar.signup" />
            </Button>
        </span>
    );


    const renderUserBar = () => (
        <Button color="secondary" disabled>
            <img src={avatar} width="30" height="30" className="d-inline-block align-top" alt="" />
        </Button>
    );

    return (
        <div>
            <Navbar>
                <NavbarBrand className="mr-auto"></NavbarBrand>
                {isLoggedIn() ?
                    renderUserBar() :
                    renderPublicBar()
                }
            </Navbar>
        </div>
    );
}

export default MenuNavbar;