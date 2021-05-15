import { createStyles, makeStyles } from '@material-ui/core';
import React from 'react';
import kovalska from '../images/logos/Beton_vid_Kovalskoi_logo_2018-01.png';
import ceresit from '../images/logos/ceresit-logo.png';
import hilti from '../images/logos/Hilti-Logo.jpg';
import dewalt from '../images/logos/dewalt.png';
import ruuki from '../images/logos/Ruukki-Logo.svg.png';
import smereka from '../images/logos/unnamed.jpg';
import knauf from '../images/logos/Knauf.png';
import epicentr from '../images/logos/Epicentrk.svg.png';

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      marginBottom: '50px'
    },
    partners: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    image: {
      height: 80,
      width: 'auto',
      margin: '20px 10px 10px'
    }
  })
);

const Partners = () => {
  const images = [dewalt, hilti, knauf, kovalska, smereka, ceresit, epicentr];
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <h3>Наші партнери</h3>
      <div className={classes.partners}>
        {images.map((logo, idx) => (
          <img key={idx} src={logo} alt={'logo'} className={classes.image} />
        ))}
      </div>
    </section>
  );
};

export default Partners;
