import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
       
        <Menu inverted>
            <Container>
                <Link to = "/">
                 <Menu.Item name="Star Wars" />
                </Link>
                <Link to = "/people">
                    <Menu.Item name="People" />
                </Link>
                <Link to = "/planets">
                    <Menu.Item name="Planets" />
                </Link>
            </Container>
        </Menu>
       
    )
}

export default Navbar;