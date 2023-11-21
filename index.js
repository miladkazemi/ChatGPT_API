/*
doc:

token:
you will need to sign up for a free OpenAI account on the OpenAI website --> https://openai.com/
--------------------------------------------------------------------------------------------

package.json:
add  "type": "module",  for fix error
--------------------------------------------------------------------------------------------

Run: 
npm i chatgpt
npm i express
npm i express-bearer-token
npm i body-parser


    {----------------------------------}
    |     Created by MiladStOrM :)     |
    |                                  |
    |     Telegram: @DevStOrM          |
    |     Telegram: @MiladStOrM        |
    {----------------------------------}

*/







import { ChatGPTAPI } from 'chatgpt'
import im_express from 'express';
import im_express_bearerToken from 'express-bearer-token';
import im_bodyParser from 'body-parser';

const express = new im_express({});
const bearerToken = im_express_bearerToken;
var app = express;
const bodyParser =  im_bodyParser

const gpt = new ChatGPTAPI({
  apiKey: "your Token" // see doc
})


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(bearerToken());


app.get('', function (req, res) {
    res.json({"data": 'hi'})
})


app.post('/api/v1/send_message', function (req, res) {
  var msg = 'Suggest a description for this product. The product is' + req.body.product + ', its category is ' + req.body.category +', and its description is ' + req.body.description
  gpt.sendMessage(msg).then(function(result) {
    res.json({"data": result})
  })
})




app.listen(8000, function () {
    console.log('app served on: http://localhost:8000');
});
  
