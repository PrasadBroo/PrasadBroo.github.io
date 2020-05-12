const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.listen(port,() => console.log(`Example app listening at http://localhost:${port}`));

app.use(express.static('Website'));
app.get('/',express.static('Website'));

