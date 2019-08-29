const express   = require('express'),
      app       = express();

const port      = 7136,
      directory = '/web_root/';



const page404 = `<!doctype html>
<html>
  <head>
    <title>Just a 404 page</title>
    <style type="text/css">html,body,h1{margin:0;padding:0;border:0;}p{padding:2em;margin:0;line-height:165%;text-indent:2.25em;}body{font-size:300%;color:white;background-color:#0A448F;}h1{font-size:200%;padding:1em;background-color:#28244C;border-bottom:1px solid #191730;}#bug{position:fixed;bottom:2em;right:2em;background-color:#28244C;padding:1em;border-radius:0.33em;border: 2px solid #191730;}#bug a{color:#def;}</style>
  </head>
  <body>
    <h1>404 - Not Found</h1>
    <p>Sorry, but, the requested page or endpoint does either not exist, or this server does not have privileges to offer it.  As a result, this request is denied.  Please check the resource you are requesting and the credentials you are presenting, and try your request again.  No further information is available.</p>
    <div id="bug"><a rel="noopener noreferrer" target="_blank" href="https://github.com/StoneCypher/servehere/">Hosted by ServeHere</a></div>
  </body>
</html>`;







app.use( (req,res,next) => {
  res.header('Access-Control-Allow-Origin',  '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
} );

app.use(express.static(directory));

app.use( (_req, res, _next) => res.status(404).send(page404) );

app.listen(port, () => console.log(' - servehere listening on port ' + port) );