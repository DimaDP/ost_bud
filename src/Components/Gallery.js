import { createStyles, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import stihl from '../images/projects/stihl.JPG';
import huyndai from '../images/projects/avto_hyundai.jpg';
import mta from '../images/projects/mta.jpg';

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      margin: '50px auto'
    },
    imgLabel: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      zIndex: 10,
      fontSize: 40
    }
  })
);

const Gallery = () => {
  const classes = useStyles();
  const projects = [{ photo: stihl, info: 'stihl' }, { photo: huyndai, info: 'hyundai' }, { photo: mta, info: 'MTA' }];
  const [info, setInfo] = useState(projects[0].info);
  const onAnimationStart = ({ element, currentIndex, nextIndex, currentScreen, nextScreen }) => {
    // eslint-disable-next-line no-console
    console.log(currentIndex);
    setInfo(projects[currentIndex].info);
  };
  return (
    <section className={classes.section}>
      <h3>Наші проекти</h3>
      <AwesomeSlider
        animation='cubeAnimation'
        customContent={<span className={classes.imgLabel}>{info}</span>}
        bullets={false}
        onTransitionEnd={onAnimationStart}
      >
        {projects.map((project, idx) => (
          <div key={idx} data-src={project.photo} />
        ))}
        {/* <div data-src='/path/to/image-1.png' />
      <div data-src='/path/to/image-2.jpg' /> */}
      </AwesomeSlider>
    </section>
  );
};

export default Gallery;
