const express = require('express');
const path = require('path');
const app = express();


//Getting our POSTS routes
const posts = require('./server/routes/posts');
//Using middleware
app.use(express,static(path.join(_dirname, 'dist')));
app.use('/posts',posts);

//Catch all other routes request and return it to the index
app.get('/',(req, res)=>{
res.sendFile(path.join(_dirname,'dist/index.html'))
});

app.listen(4600, (req, res)=>{
  console.log('RUNING');
});
