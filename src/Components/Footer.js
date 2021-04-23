import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            position: 'relative',
            height: 500,
            backgroundColor: 'lightslategray'
        },
        contacts: {
            display: 'flex',
            flexDirection: 'column'
        },
        text: {
            lineHeight: '24px',
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center'
        }
    }));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.container} id={'footer'}>
            <div className={classes.contacts}>
                <span className={classes.text}><PhoneIcon />+38 067 403 57 54</span>
                <span className={classes.text}><MailOutlineIcon />director@ostbud.com.ua</span>
            </div>
        </footer>
    )
}

export default Footer;