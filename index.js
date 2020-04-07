const morgan = require('morgan');
const express = require('express');


const port = 3000;
const app = express();
app.use(morgan('combined'));

app.get('/doc', (req, res) => {
  console.log('cookies', req.cookies);
  res.cookie('name', 'doc', {
    maxAge: 30000,
    path: '/doc',
  });
  res.status(200).send('will have cookie name = doc!');
});

app.get('/', (req, res) => {
  console.log('cookies', req.cookies);
  res.cookie('name', '', {
    path: '/doc',
  });
  const sameSite = 'lax';
  res.cookie('samesite', sameSite, {
    sameSite,
    httpOnly: true,
  });
  res.status(200).send('wont have cookie doc!');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
