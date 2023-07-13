import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: 'abt1.jpg',
    caption: 'Greece'
  },
  {
    url: 'abt2.jpg',
    caption: 'Netherlands'
  },
  {
    url: 'abt3.jpg',
    caption: 'United Kingdom'
  },
  {
    url: 'abt4.jpg',
    caption: 'Turkey'
  },
];

export default function AboutImageSlider(){
    return(
        <>
        <div className="slide-container">
      <Fade className="about-slideshow">
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%' }} src={fadeImage.url} />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
        </>
        )
}