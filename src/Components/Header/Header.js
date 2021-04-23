import React from "react";
import {AppBar, Button, createStyles, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import footerImg from '../../images/construction-insurance-header.jpeg'

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
            paddingTop: 100,
            boxSizing: 'border-box'
        },
        title: {
            fontStyle: 'bold',
            color: '#e4e4e4',
            textAlign: 'center',
            letterSpacing: 4
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
    }));

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography variant="h3" className={classes.title}>
                ОСТ-БУД
            </Typography>
            <Typography variant="h4" className={classes.title}>
                Любимо будувати!
            </Typography>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
                <div className={classes.nav}>
                    <Button color="inherit">Про нас</Button>
                    <Button color="inherit">Наші переваги</Button>
                    <Button color="inherit">Наші об'єкти</Button>
                    <Button href="#footer" color="inherit">Контакти</Button>
                </div>
            </AppBar>
        </div>
    )
}

export default Header;