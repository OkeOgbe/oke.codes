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
                            <div className="container pt-3">
                                <h2 className='sectionHead--mid textIsPink text--light'>Recent Projects</h2>

                                <div className="row pt-3 pb-4">
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

                                                    <a
                                                        href='https://ruthies.netlify.app/'
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className='textIsPink textIsBold'>
                                                        <i className="fas fa-link mx-1"></i>
                                                        Visit Project</a>
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
                                                    <img src="/images/maalexi.png" className='w-100' alt=""/>
                                                </div>

                                            </div>
                                            <div className={`center ${styles.projectInfo} `}>
                                                <div className="p-4 vAlign">
                                                    <p className="textIsPink sectionHead--mid">maalexi.com</p>
                                                    <p className="textIsWhite">
                                                        A Wholesale Import and Finance of Food and Agriculture product built with
                                                        Next.js and Typescript.
                                                    </p>

                                                    <a
                                                        href='https://maalexi.com/'
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className='textIsPink textIsBold'>
                                                        <i className="fas fa-link mx-1"></i>
                                                        Visit Project</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mt-4">
                                        <div className={`center isClickable ${styles.projectCard}`}>
                                            <div>
                                                <div className={styles.imgHolder}>
                                                    <img src="/images/hopeup.png" className='w-100' alt=""/>
                                                </div>

                                            </div>
                                            <div className={`center ${styles.projectInfo} `}>
                                                <div className="p-4 vAlign">
                                                    <p className="textIsPink sectionHead--mid">Hopeup</p>
                                                    <p className="textIsWhite">
                                                        A coporate website built for an oil servicing company.
                                                    </p>

                                                    <a
                                                        href='https://hopeupindustries.com/'
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className='textIsPink textIsBold'>
                                                        <i className="fas fa-link mx-1"></i>
                                                        Visit Project</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mt-4">
                                        <div className={`center isClickable ${styles.projectCard}`}>
                                            <div>
                                                <div className={styles.imgHolder}>
                                                    <img src="/images/siteat.png" className='w-100' alt=""/>
                                                </div>

                                            </div>
                                            <div className={`center ${styles.projectInfo} `}>
                                                <div className="p-4 vAlign">
                                                    <p className="textIsPink sectionHead--mid">SitEat</p>
                                                    <p className="textIsWhite">
                                                        A food ordering web application used for ordering food from concession stands.
                                                        Built with React and Material UI.
                                                    </p>

                                                    <a
                                                        href='https://app.siteat.org/'
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className='textIsPink textIsBold'>
                                                        <i className="fas fa-link mx-1"></i>
                                                        Visit Project</a>
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
