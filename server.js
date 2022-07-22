let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/fcb_web'));

app.get('/*', (req, resp)=>{
  resp.sendFile(__dirname+'/dist/fcb_web(index.html');
});

app.listen(process.env.PORT || 8080);