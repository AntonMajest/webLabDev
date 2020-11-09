import React, {Component} from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

class Header extends Component {
    render() {
        return (

            <div >
                <div className={'header'}>
                        <NavLink  className={'header-nav'}
                                  to={'/home'}
                                  activeClassName="active"
                        >
                            Home
                        </NavLink>
                        <NavLink className={'header-nav'}
                                 to={'/aboutme'}
                                 activeClassName="active"
                        >
                            About me
                        </NavLink>
                        <NavLink className={'header-nav'}
                                 to={'/university'}
                                 activeClassName="active"
                        >
                            University
                        </NavLink>
                        <NavLink className={'header-nav'}
                                 to={'/interest'}
                                 activeClassName="active"
                        >
                            Interest
                        </NavLink>
                        <NavLink className={'header-nav'}
                                 to={'/profession'}
                                 activeClassName="active"
                        >
                            Profession
                        </NavLink>
                    <div className={'menu-display'}>
                        <Menu right >
                        <NavLink  className={'header-nav'}
                                  to={'/home'}
                                  activeClassName="active"
                        >
                            Home
                        </NavLink>
                        <NavLink className={'header-nav'}
                                 to={'/aboutme'}
                                 activeClassName="active"
                        >
                            About me
                        </NavLink>
                        <NavLink className={'header-nav'}
                                 to={'/university'}
                                 activeClassName="active"
                        >
                            University
                        </NavLink>
                        <NavLink className={'header-nav'}
                                 to={'/interest'}
                                 activeClassName="active"
                        >
                            Interest
                        </NavLink>
                        <NavLink className={'header-nav'}
                                 to={'/profession'}
                                 activeClassName="active"
                        >
                            Profession
                        </NavLink>
                    </Menu>
                    </div>

                </div>
            </div>
        );
    }
}

export default Header;