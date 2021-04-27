import React from 'react';
import { AppBar, Button, createStyles, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import footerImg from '../../images/header.jpg';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      position: 'relative',
      height: 500,
      backgroundColor: '#eeeeee',
      backgroundImage: `url(${footerImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      paddingTop: 50,
      boxSizing: 'border-box'
    },
    title: {
      fontFamily: 'Jost',
      fontSize: 40,
      fontWeight: 800,
      color: '#e4e4e4',
      textAlign: 'center',
      position: 'relative',
      '&:after': {
        content: '""',
        width: '75px',
        height: 9,
        backgroundColor: 'red',
        position: 'absolute',
        top: '-5px',
        left: 'calc(50% - 90px)'
      }
    },
    nav: {
      display: 'flex',
      marginTop: 100,
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: 40,
      left: 40,
      right: 40
    }
  })
);

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.title}>ОСТ-БУД</div>
      <AppBar position='static' style={{ background: 'transparent', boxShadow: 'none' }}>
        <div className={classes.nav}>
          <Button color='inherit'>Про нас</Button>
          <Button color='inherit'>Наші переваги</Button>
          <Button color='inherit'>Наші об'єкти</Button>
          <Button href='#footer' color='inherit'>
            Контакти
          </Button>
        </div>
      </AppBar>
    </div>
  );
};

export default Header;
