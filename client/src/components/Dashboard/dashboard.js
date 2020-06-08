import React, { Component, useState } from "react";
import Toast from "light-toast";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { classes } from "./themer";
import MeetingRoomTwoToneIcon from '@material-ui/icons/MeetingRoomTwoTone';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: " ",
      password: " ",
    };
  }

  render() {
    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };
    // const handleDrawerClose = () => {
    //   setOpen(false);
    // };
    return (
      <>
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
        {/* <div className="container-fluid row">
                    <div className="col-4">
                        <Button variant="outline-success"><a href="/loan">Apply Loan</a></Button>
                    </div>
                    <div className="col-4">
                    </div>
                    <div className="col-4">
                        <Button variant="outline-secondary">View reports</Button>
                    </div>
                </div> */}
        <React.Fragment>
          <CssBaseline />
          <AppBar position="relative">
            <Toolbar>
              <AccountBalanceIcon className={classes.icon} />
              <Typography variant="h6" color="inherit" noWrap>
                Dashboard
              </Typography> {""}
              <MeetingRoomTwoToneIcon className={classes.icons} />
              <Typography variant="h6" color="inherit" noWrap>
              <a href="/sign-in">Logout</a>
              </Typography>
            </Toolbar>
        
          </AppBar>
          <main>
            {/* Hero unit */}
            <div className={classes.heroContent}>
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  Loan Manager
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="textSecondary"
                  paragraph
                >
                 Loan Management the easy way.
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary">
                      <a href="/loan">Apply Loan</a>
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                       View Reports
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
              {/* End hero unit */}
              {/* <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card. You can use this section to
                          describe the content.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid> */}
            </Container>
          </main>
          {/* Footer */}
          <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              iSolutions
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              component="p"
            >
              We solve everything!
            </Typography>
            {/* <Copyright /> */}
          </footer>
          {/* End footer */}
        </React.Fragment>
      </>
    );
  }
}

export default Dashboard;
