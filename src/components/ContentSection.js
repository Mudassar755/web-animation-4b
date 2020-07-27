import React from 'react';
import { Typography, makeStyles, Container, Grid } from "@material-ui/core";
import service1 from '../images/service1.svg';
import service2 from '../images/service2.svg';
import service3 from '../images/service3.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        background:
            "linear-gradient(90deg, #9803BE 0%, #670799 100%)",
        padding: "5rem 0",
        color: "white",
        transition: "0.5s"
    },
    services: {
        padding: "20px",
        paddingBottom: "50px",
        width: "100%",
        minHeight: "400px"
    },
    servicesInner: {
        width: "100%",
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
    },
    columnLeft: {
        height: "100%",
        padding: "20px"
    },
    columnRight: {
        height: "100%",
        padding: "20px",
        "& h2": {
            fontWeight: "500",
            fontSize: "50px"
        }
    },
    serviceImage1: {
        width: "100%",
        height: "100%",

    },
    tagList: {
        width: "100%",
        display: "flex",
        flexFlow: "row wrap"
    },
    tag: {
        padding: "10px",
        margin: "3px",
        "&:before": {
            content: "."
        }
    }

}));

const ContentSection = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <div className={classes.services}>
                    <Grid container spacing={3} className={classes.servicesInner}>
                        <Grid item xs={12} sm={6} md={6} className={classes.columnLeft}>
                            <div className={classes.serviceImage1}>
                                <img src={service2} alt="service1" />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} className={classes.columnRight}>
                            <Typography variant="h2">UX Writing</Typography>
                            <p>
                                I develop clear and useful text in product interfaces to help users reach a specific goal,
                                whether that's completing a form or tapping a button. This includes every type of content
                                from on-screen help systems, user onboarding and in-app messages to push notifications and tooltips.

                            </p>
                            <div className={classes.tagList}>
                                <div className={classes.tag}>Microcopy</div>
                                <div className={classes.tag}>Taxonomy &amp; Labeling</div>
                                <div className={classes.tag}>Chatbots</div>
                                <div className={classes.tag}>User Research</div>
                                <div className={classes.tag}>Content Style Guide</div>
                                <div className={classes.tag}>User Testing</div>
                                <div className={classes.tag}>Design Principles</div>
                                <div className={classes.tag}>Prototype</div></div>
                        </Grid>
                    </Grid>

                </div>

                <div className={classes.services}>
                    <Grid container spacing={3} className={classes.servicesInner}>

                        <Grid item xs={12} sm={6} md={6} className={classes.columnRight}>
                            <Typography variant="h2">Website Copywriting</Typography>
                            <p>
                                Your website is a dialogue with your audience. I capture the essence of your business and
                                communicate it clearly. Carefully considered writing and SEO best practices allow me to craft
                                the perfect user journey online. Let me draw the map that guides users every step of the way
                                from discovery, to consideration, to conversion.

                            </p>
                            <div className={classes.tagList}>
                                <div className={classes.tag}>Information Architecture</div>
                                <div className={classes.tag}>Wireframes</div>
                                <div className={classes.tag}>Competitor Analysis</div>
                                <div className={classes.tag}>On-page SEO</div>
                                <div className={classes.tag}>Off-page SEO</div>
                                <div className={classes.tag}>USP/UVP</div>
                                <div className={classes.tag}>Landing Page</div>
                                <div className={classes.tag}>Sales Letter</div></div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} className={classes.columnLeft}>
                            <div className={classes.serviceImage1}>
                                <img src={service3} alt="service1" />
                            </div>
                        </Grid>
                    </Grid>

                </div>


                <div className={classes.services}>
                    <Grid container spacing={3} className={classes.servicesInner}>
                        <Grid item xs={12} sm={6} md={6} className={classes.columnLeft}>
                            <div className={classes.serviceImage1}>
                                <img src={service1} alt="service1" />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} className={classes.columnRight}>
                            <Typography variant="h2">Content Writing</Typography>
                            <p>
                                Give your business a competitive edge with powerful content that can be targeted to any
                                segment of your audience. No matter how large or complex your project, my custom-built
                                solutions including articles, eDMs, and case studies will help you implement a plan
                                that maximizes your business’s online exposure.

                            </p>
                            <div className={classes.tagList}>
                                <div className={classes.tag}>Headlines & Taglines</div>
                                <div className={classes.tag}>Content Strategy</div>
                                <div className={classes.tag}>Blogs & Articles</div>
                                <div className={classes.tag}>Social Media Content</div>
                                <div className={classes.tag}>Video Scripts</div>
                                <div className={classes.tag}>eDMs & Newsletters</div>
                                <div className={classes.tag}>Case Studies</div>
                                <div className={classes.tag}>Whitepapers</div></div>
                        </Grid>

                    </Grid>

                </div>
            </Container>
        </div>
    )
}

export default ContentSection
