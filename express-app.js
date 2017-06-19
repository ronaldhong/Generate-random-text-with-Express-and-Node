const express= require('express');
// const path = require('path');
const app= express();
let loremIpsum= require('lorem-ipsum')


app.get('/lorem/:num',function(req,res){
    let num=3;
    let html="";
    for (let i=0; i<num; i++){
      let output= loremIpsum();
      html+= `
        <p>${output}</p>
      `
    }
    res.send(html);
})

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
