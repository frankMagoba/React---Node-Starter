import React, { Component } from "react";
import Toast from "light-toast";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: " ",
			password: " "
		};
	}



	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const form = {
			username: this.state.username,
			password: this.state.password,
		};
		console.log(form);
		Toast.info("Signing in...", 3000, () => {
			// do something after the toast disappears
		});
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(form),
		};
		fetch("http://localhost:4000/users/authenticate", requestOptions)
			.then((response) => {
				console.log(response);
				response.status === 200
					? Toast.info("Successfully logged in...", 3000, () => {
						window.location = "/dashboard";
					})
					: Toast.info(response.statusText);
			})
			.then((data) => console.log("You in!"));
	};



	render() {
		const classes = makeStyles((theme) => ({
			paper: {
				marginTop: theme.spacing(8),
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			},
			avatar: {
				margin: theme.spacing(1),
				backgroundColor: theme.palette.secondary.main,
			},
			form: {
				width: '100%', // Fix IE 11 issue.
				marginTop: theme.spacing(1),
			},
			submit: {
				margin: theme.spacing(3, 0, 2),
			},
		}));
		return (
			<>
				<Container component="main" maxWidth="xs">
					<CssBaseline />
					<div className={classes.paper}>
						<Avatar className={classes.avatar}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign in
            </Typography>
						<form className={classes.form} noValidate>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="User name"
								name="username"
								value={this.state.username}
								onChange={e => this.handleChange(e)}
								autoComplete="email"
								autoFocus
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								value={this.state.password}
						onChange={e => this.handleChange(e)} 
								autoComplete="current-password"
							/>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
								onClick={(e) => this.onSubmit(e)}
							>
								Sign In
              </Button>
							<Grid container>
								<Grid item xs>
									<Link href="#" variant="body2">
										Forgot password?
                  </Link>
								</Grid>
								<Grid item>
									<Link href="#" variant="body2">
										{"Don't have an account? Sign Up"}
									</Link>
								</Grid>
							</Grid>
						</form>
					</div>
				</Container>
			</>
		);
	}
}

export default Home;
