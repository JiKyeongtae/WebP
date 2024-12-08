const express = require('express');

const app = express();
app.set('port',4000);
app.use((req, res, next) => {
    res.status(200).send('<h1>Welcome</h1>');
});

app.listen(app.get('port'),()=> {
    console.log('Server listening in port3000');
})
