import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import footerImg from "../images/construction-insurance-header.jpeg";

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            position: 'relative',
            height: 500
        }
    }));

const AboutUs = () => {
    const classes = useStyles();
    return <div className={classes.container}>About US</div>
}

export default AboutUs;