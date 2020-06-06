const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
const app = express();
const config = require("config");
const mongoose = require("mongoose");
const usersRoute = require("./routes/user.route");

/**
 * Configure the middleware.
 * bodyParser.json() returns a function that is passed as a param to app.use() as middleware
 * With the help of this method, we can now send JSON to our express application.
 */
// app.use( bodyParser.urlencoded( { extended: false } ) );
// app.use( bodyParser.json() );

// We export the router so that the server.js file can pick it up
// module.exports = router;

// Combine react and node js servers while deploying( YOU MIGHT HAVE ALREADY DONE THIS BEFORE
// What you need to do is make the build directory on the heroku, which will contain the index.html of your react app and then point the HTTP request to the client/build directory

// if ( process.env.NODE_ENV === 'production' ) {
// 	// Set a static folder
// 	app.use( express.static( 'client/build' ) );
// 	app.get( '*', ( req, res ) => res.sendFile( path.resolve( __dirname, 'client', 'build', 'index.html' ) ) );

// }

// Set up a port
// const port = process.env.PORT || 5000;

// app.listen( port, () => console.log( `Server running on port: ${port}` ) );

//use config module to get the privatekey, if no private key set, end the application
if (!config.get("myprivatekey")) {
	console.error("FATAL ERROR: myprivatekey is not defined.");
	process.exit(1);
}

//connect to mongodb
mongoose
	.connect("mongodb://localhost/nodejsauth", { useNewUrlParser: true })
	.then(() => console.log("Connected to MongoDB..."))
	.catch(err => console.error("Could not connect to MongoDB..."));


app.use(express.json());
//use users route for api/users
app.use("/api/users", usersRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));