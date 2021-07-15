import React, {useState} from 'react';
import styles from '../../styles/Landing.module.css';
import Nav from './Nav';

const Layout = ({bgText, children}) => {

    const [light, setLight] = useState(false);

    return (
        <>
            <Nav changeTheme={() => setLight(!light)}/>

            <div className={`hasBgColor ${light && 'light'}`}>
                <div className="container">
                    <h2
                        className="bgText"
                        style={{
                        lineHeight: 1
                    }}>{bgText}</h2>

                    <div className={`${light && styles.light} ${styles.content}`}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;
