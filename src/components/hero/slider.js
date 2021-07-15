import React from 'react';
import {Carousel} from 'react-bootstrap';

function Slider() {

    return (
        <div className='w-100 isRelative'>
            <div className="animatedLoader"></div>

            <Carousel fade={true} controls={false} loop={true} autoplay={true} className='isRelative'>
                <Carousel.Item>
                    <img src="/images/mee.jpeg" className='w-100' alt=""/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src="/images/meee.jpeg" className='w-100' alt=""/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
