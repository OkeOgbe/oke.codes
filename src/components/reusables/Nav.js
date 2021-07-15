import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from '../../styles/Nav.module.css';
import Themetoggle from './Themetoggle';

function Nav({changeTheme}) {

    const routes = [
        {
            text: 'About',
            url: '/about'
        }, {
            text: 'Contact',
            url: '/about'
        }, {
            text: 'Portfolio',
            url: '/about'
        }
    ]

    return (
        <div className={`alignOnly ${styles.nav}`}>
            <div className="container alignOnly spaceBetween">
                <div className='d-flex'>
                <Link className={styles.logo}>
                    <h2 className="sectionText textIsPink mb-0">oke.codes</h2>
                    <div className={styles.logoEffect}></div>
                </Link>

                <div className="mx-4">
                    <Themetoggle activate={changeTheme}/>
                </div>
                </div>

                <div className={`spaceBetween ${styles.linkHolder}`}>
                    {routes.map(route => (
                        <NavLink to={route.url} activeClassName={styles.activeLink} className={`mx-4 sectionText--mid ${styles.link}`}>{route.text}</NavLink>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Nav
