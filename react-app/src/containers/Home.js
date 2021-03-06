import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import BackgroundImage from "./assets/img--Home-background.jpg";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const theme = createMuiTheme({
    palette: {
        type: "dark"
    },
    typography: {
        fontSize: 16,
        fontFamily: "inherit",
        fontWeight: "700"
    }
});

const styles = theme => ({
    background: {
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        padding: theme.spacing.unit * 3
    },
    root: {
        padding: theme.spacing.unit * 2,
        background: "rgba(0,0,0, .5)",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center"
    },
    mb2: {
        marginBottom: theme.spacing.unit * 2
    },
    joinButton: {},
    slackIcon: {
        width: "40px",
        height: "40px"
    }
});

class Home extends React.PureComponent {
    render() {
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.background}>
                    <Paper className={classes.root} elevation={10}>
                        <Typography
                            component="h1"
                            variant="h5"
                            align="center"
                            className={classes.mb2}
                        >
                            Public Service Announcement
                        </Typography>
                        <Typography
                            component="p"
                            align="left"
                            className={classes.mb2}
                        >
                            As a Full-Stack Apprentice (FSA), you will learn to
                            create modern & secure digital products while
                            learning how to run a business.
                        </Typography>
                        <Typography
                            component="p"
                            align="left"
                            className={classes.mb2}
                        >
                            You will work with a mentor who will pass their
                            skills on to you. In exchange for their knowledge &
                            direction, you will work on their entrepreneurial
                            ventures for them with the goal of creating a
                            profitable business together. You will aquire
                            competence in these areas:
                        </Typography>
                        <List dense={true}>
                            <ListItem>
                                <ListItemText>
                                    Authenticating users & authorizing system
                                    permissions{" "}
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    Interface design, & user experience (UX)
                                    principles
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    Setting up a server, REST API's, and
                                    securing them
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    Working with relational & NoSQL databases
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    Application & network security principles
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    Developing component-driven web applications
                                    and/or mobile applications
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    Provisioning application infrastructure, so
                                    that your product can grow from one user to
                                    10,000
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    Automated testing to stabilize your code
                                </ListItemText>
                            </ListItem>
                        </List>
                        <Typography
                            component="p"
                            align="left"
                            className={classes.mb2}
                        >
                            At first, you will work for your mentor for free.
                            Their time is valuable, and you must prove your
                            dedication. After a sufficient period of time, the
                            mentor should make every effort to pay the
                            apprentice a rate that makes sense from a business
                            standpoint, as well as offering equity in a business
                            venture.{" "}
                        </Typography>
                        <Typography
                            component="p"
                            align="left"
                            className={classes.mb2}
                        >
                            This process can take anywhere from six to twelve
                            months, depending on how much time the apprentice
                            has to dedicate to immersive training & what point
                            you are starting from.{" "}
                        </Typography>{" "}
                        <Typography
                            component="p"
                            align="left"
                            className={classes.mb2}
                        >
                            Join our Slack group below to join our community in
                            Seattle - a place where you can connect with
                            potential mentors & apprentices. We are looking to
                            expand organically - if you would like to partner
                            with us, send us a message in the channel and let's
                            talk.{" "}
                        </Typography>
                        <Button
                            className={classes.joinButton}
                            variant="contained"
                            target="_blank"
                            href="https://join.slack.com/t/fullstackapprentice/shared_invite/enQtMzk4NTUzMjkyNDA0LTg1NGM2ZGU0YzI2NTU4N2NjZDViNjBjYTdiODQ3MmJiMmM3NGE3OTY2OGI5M2EyYmQ4OGUxYjU0MTZkZjYyZWE"
                        >
                            <img
                                src="https://cdn.brandfolder.io/5H442O3W/as/vwqoqir7/Slack%20Mark%20%E2%80%94%20Web.svg"
                                className={classes.slackIcon}
                            />
                            Join the FSA Slack Channel
                        </Button>
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
