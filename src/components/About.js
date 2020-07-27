import React from 'react';
import { Typography, makeStyles, Container, Grid } from "@material-ui/core";
import hero from '../images/hero.svg';
import HeroSvg from './Hero'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        background:
            "linear-gradient(90deg, #570091 0%, #7522B6 100%)",
        padding: "20px",
        color: "white",
        minHeight: "500px"
    },
    innerContainer: {
        width: "100%",
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto"
    },
    leftColumn: {
        height: "100%"
    },
    rightColumn: {
        height: "100%"
    },
    aboutAvatar: {
        width: "100%",
        height: "100%",
        marginTop: "40px",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    aboutImage: {
        width: "100%",
        margin: "auto",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        borderRadius: "50%",
        border: "10px double #ffffff",
        overflow: "hidden",
        maxWidth: "350px",
        "& img": {
            width: "100%",
            height: "100%",
            transform: "translate3d(0px, 0px, 0px)",
        }
    },
    aboutImgName: {
        fontSize: "15px",
        marginTop: "20px",
        marginBottom: "20px",
        fontWeight: "200",
        fontStyle: "italic"
    },
    aboutText: {
        padding: "30px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexFlow: "column",
        "& p": {
            fontSize: "20px"
        }
    },
    aboutHeading: {
        fontWeight: "300",
        fontSize: "28px",
        backgroundColor: "rgba(0,0,0,0.1)",
        display: "inline-block",
        padding: "5px 40px",
        boxShadow: "1px 16px 20px rgba(0, 0, 0, 0.17)"
    }


}));
const About = () => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <div className={classes.innerContainer}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={6} className={classes.leftColumn}>
                            <div className={classes.aboutAvatar}>
                                <div className={classes.aboutImage}>
                                    <HeroSvg />
                                    {/* <img src={hero} /> */}
                                </div>
                                <div className={classes.aboutImgName}>
                                    <strong>Nathan Mudaliar</strong>, the Cortex Copywriter
                                        </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} className={classes.rightColumn}>
                            <div className={classes.aboutText}>
                                <Typography variant="h3" className={classes.aboutHeading}>About</Typography>
                                <p>
                                    My copywriting and UX writing draws on abilities developed in the psychological sciences.
                                </p>
                                <p>
                                    Expertise in visual perception, behavioral motivation, and decision-making allows me to
                                    engineer words that convert customers and guide users.
                                </p>

                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>

        </div>
    )
}

export default About
