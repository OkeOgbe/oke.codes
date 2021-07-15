import React from 'react';
import Slider from '../components/hero/slider';
import Layout from '../components/reusables/Layout';
import styles from '../styles/Landing.module.css';

function Home() {
    return (
        <div>
            <Layout bgText={<span>oke. <br/> codes</span>}>
                <div className={`alignOnly ${styles.hero}`}>
                    <div className="row w-100">
                        <div className="col-md-6 alignOnly">
                            <div className={`textIsWhite w-100 ${styles.textHolder}`}>
                        <div className={`sectionHead--mid textIsPink mb-2 ${styles.greeting}`}>
                            <ul className={styles.greetingList}>
                                <li><span>Hello</span></li>
                                   <li><span>Hola</span></li>
                                  <li><span>Bonjour</span></li>
                                    <li><span>Salve</span></li>
                            </ul>
                        </div>
                                <p style={{lineHeight: 2}} className='text--light'>Hello, my name is Ogbe Daniel . I am an Ever Growing Front end Developer. I currently live in Port Harcourt, Nigeria. With a year experience as a Web developer, I believe I have acquired certain skills and knowledge necessary to make your project a success.</p>
                      <button className="defaultBtn">View Projects <i className="fas fa-angle-right"></i></button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles.imgHolder}>
                                <Slider/>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </div>
    )
}

export default Home
