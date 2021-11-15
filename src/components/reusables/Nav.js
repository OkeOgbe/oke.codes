import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from '../../styles/Nav.module.css';
import Themetoggle from './Themetoggle';

function Nav({changeTheme}) {

    const [isActive,
        setIsActive] = useState(false);

    const routes = [
        {
            text: 'About',
            url: '/about'
        }, {
            text: 'Portfolio',
            url: '/portfolio'
        }, {
            text: 'Contact',
            url: '/contact'
        }
    ]

    return (
        <div className={`alignOnly ${styles.nav}`}>
            <div className="container alignOnly spaceBetween">
                <div className='d-flex'>
                    <Link to='/' className={styles.logo}>
                        <h2 className="sectionText textIsPink mb-0">oke.codes</h2>
                        <div className={styles.logoEffect}></div>
                    </Link>

                    <div className="mx-4">
                        <Themetoggle activate={changeTheme}/>
                    </div>
                </div>

                <div className={`spaceBetween ${styles.linkHolder}`}>
                    {routes.map(route => (
                        <NavLink
                            exact
                            to={route.url}
                            activeClassName={styles.activeLink}
                            className={`mx-4 sectionText--mid isRelative ${styles.link}`}>{route.text}</NavLink>
                    ))}
                </div>

                <div className={`mt-2 ${styles.menuIcon}`} onClick={() => setIsActive(!isActive)}>
                    <div
                        className={`${isActive
                        ? styles.open
                        : ''} ${styles.menuIcon}`}>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
