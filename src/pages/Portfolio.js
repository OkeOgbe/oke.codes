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

                                <div className="row pt-5">
                                    <div className="col-md-6">
                                          <div className={`center isClickable ${styles.projectCard}`}>
                                            <div>
                                                <div className={styles.imgHolder}>
                                                    <img src="/images/ruthies.png" className='w-100' alt=""/>
                                                </div>

                                            </div>
                                            <div className={`center ${styles.projectInfo} `}>
                                                <div className="p-4 vAlign">
                                                    <p className="textIsPink sectionHead--mid">Ruthies</p>
                                                    <p className="textIsWhite">
                                                      A coporate site for a Fashion and Beauty Store.
                                                    </p>

                                                    <a href='https://ruthies.netlify.app/' target="_blank"  rel="noreferrer" className='textIsPink textIsBold'><i className="fas fa-link mx-1"></i> Visit Project</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-6">
                                        <div className={`center isClickable ${styles.projectCard}`}>
                                            <div>
                                                <div className={styles.imgHolder}>
                                                    <img src="/images/easy.png" className='w-100' alt=""/>
                                                </div>

                                            </div>
                                            <div className={`center ${styles.projectInfo} `}>
                                                <div className="p-4 vAlign">
                                                    <p className="textIsPink sectionHead--mid">Easyflex.ng</p>
                                                    <p className="textIsWhite">
                                                        An mvp for a fintech application powered by Raddr Technologies.
                                                    </p>

                                                    <p className="textIsPink">Site Unavailable</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                   <div className="col-md-6 mt-4">
                                        <div className={`center isClickable ${styles.projectCard}`}>
                                            <div>
                                                <div className={styles.imgHolder}>
                                                    <img src="/images/easy.png" className='w-100' alt=""/>
                                                </div>

                                            </div>
                                            <div className={`center ${styles.projectInfo} `}>
                                                <div className="p-4 vAlign">
                                                    <p className="textIsPink sectionHead--mid">Easyflex.ng</p>
                                                    <p className="textIsWhite">
                                                        An mvp for a fintech application powered by Raddr Technologies.
                                                    </p>

                                                    <p className="textIsPink">Site Unavailable</p>
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
