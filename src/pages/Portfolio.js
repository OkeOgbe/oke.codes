import React from 'react';
import styles from '../styles/Landing.module.css';
import Layout from '../components/reusables/Layout'
import {animtionValues, transitionValues} from '../utils/pageAnimation';
import {motion} from 'framer-motion';

function Portfolio() {
    return (
        <div>
            <Layout bgText='Portfolio'>
                <div className="w-100">
                    <motion.div
                        initial='out'
                        animate='in'
                        exit='out'
                        variants={animtionValues}
                        transition={transitionValues}>
                        <div className={`sectionHeight ${styles.portfolio}`}>
                            <div className="container">
                                <h2 className='sectionHead--mid textIsPink text--light'>Recent Projects</h2>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={`center isClickable ${styles.projectCard}`}>
                                            <div>
                                                <div className={styles.imgHolder}>
                                                    <img src="/images/easy.png" className='w-100' alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Layout>
        </div>
    )
}

export default Portfolio
