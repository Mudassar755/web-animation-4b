import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import brain from '../images/brain.svg';
import introFeature from '../images/introFeature.svg';
import lightShadow from '../images/lightShadow.svg';
import hero from '../images/hero.svg';
import { Typography, makeStyles, Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        background:
            "linear-gradient(90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%)",
        height: "100%",
        paddingBottom: "5rem"
    },
    flash: {
        marginTop: "-28rem",
    },
    textSection: {
        width: "100%",
        paddingLeft: "80px !important",
        color: "#fff",

        "& button": {
            cursor: "pointer",
            width: "200px",
            height: "50px",
            background:
                "linear-gradient(to bottom, #22F0D8, #1D79C4);",
            color: "#fff",
            borderRadius: "25px",
            padding: "10px",
            outline: "none",
            border: "none",
            transition: "0.2s"
        },
    },
    title: {
        width: "100%",
        padding: "60px",
        paddingLeft: "0px",
        paddingBottom: "20px",
        paddingTop: "120px",
        "& h1": {
            fontWeight: "500",
            marginTop: "-23px"
        },
        "& h2": {
            fontWeight: "400",
            marginTop: "-25px"
        },
    },
    paragraph: {
        fontSize: "22px",
        fontWeight: "400",
        padding: "50px",
        paddingTop: "0px",
        paddingLeft: "0px",
        paddingRight: "182px"
    },
    titleIntro: {

    }
}));

const Header = () => {
    const classes = useStyles();

    const header = useWebAnimations({
        keyframes: {
            transform: "translateY(40px)",
        },
        timing: {
            duration: 2000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
        },
    });
    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6} className={classes.textSection}>
                        {/* <Box component="div" className={classes.rightSide}> */}
                        <div className={classes.title}>
                            <Typography variant="h1">CORTEX</Typography>
                            <Typography variant="h2">COPYWRITER</Typography>
                        </div>
                        <div className={classes.paragraph}>
                            <p>Enhance your communications with psychology-based copywriting and UX writing</p>
                        </div>
                        <button>Send a message</button>
                        {/* </Box> */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        {/* <Box component="div"> */}
                        <img src={brain} alt="brain" ref={header.ref} height="500px" />
                        <img
                            src={introFeature}
                            alt="flash"
                            height="500px"
                            className={classes.flash}
                        />
                        {/* </Box> */}
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default Header
