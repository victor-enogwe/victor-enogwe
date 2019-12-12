import React, { useState, Fragment } from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
} from 'reactstrap';
import './NavBar.scss';

export const NavBar = (props: any) => {
    const { site, menu: { items } } = props
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const MenuItem = (prop: any) => {
        return (
            <NavItem className={prop.item.classes.join(' ')}>
                <NavLink target={prop.item.target} href={prop.item.url} title={prop.item.title}>{prop.item.name}</NavLink>
            </NavItem>
        )
    };
    const Menu = () => (
        <Fragment>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar={true}>
                <Nav className="mr-auto" navbar={true}>
                    {items.map((item: any, index: number) => <MenuItem item={item} key={index} />)}
                </Nav>
            </Collapse>
        </Fragment>
    )

    return (
        <div>
            <Navbar color="light" light={true} expand="md">
                <NavbarBrand href="/">{site.title}</NavbarBrand>
                {items.length ? <Menu /> : null}
            </Navbar>
        </div>
    );
};
