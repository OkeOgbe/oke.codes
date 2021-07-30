import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import Slider from '../components/hero/slider';
import Layout from '../components/reusables/Layout';
import styles from '../styles/Landing.module.css';
import {animtionValues, transitionValues} from '../utils/pageAnimation';

function Home() {
    return (
        <div>
            <Layout bgText={< span > oke. < br /> codes </span>}>
                <motion.div
                    initial='out'
                    animate='in'
                    exit='out'
                    variants={animtionValues}
                    transition={transitionValues}>
                    <div className={`alignOnly container ${styles.hero}`}>
                        <div className="row w-100">
                            <div className="col-md-6 alignOnly sectionHeight">
                                <div className={`textIsWhite w-100 ${styles.textHolder}`}>
                                    <div className={`sectionHead--mid textIsPink mb-2 ${styles.greeting}`}>
                                        <ul className={styles.greetingList}>
                                            <li>
                                                <span>Hello</span>
                                            </li>
                                            <li>
                                                <span>Hola</span>
                                            </li>
                                            <li>
                                                <span>Bonjour</span>
                                            </li>
                                            <li>
                                                <span>Salve</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <p
                                        style={{
                                        lineHeight: 2
                                    }}
                                        className='text--light'>Hello,
                                        my name is Ogbe Daniel . I am an Ever Growing Front end Developer. I currently
                                        live in Port Harcourt, Nigeria. With a year experience as a Web developer.</p>
                                    <Link to='/projects' className="defaultBtn vAlign">View Projects
                                        <i className="fas fa-angle-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 sectionHeight alignOnly">
                                <div className={styles.imgHolder}>
                                    <Slider/>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Layout>
        </div>
    )
}

export default Home
