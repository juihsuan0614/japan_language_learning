let express = require('express');
let app = express();

let engine = require('ejs-locals');

app.engine('ejs', engine);

app.set('views', './views');

app.set('view engine', 'ejs');

const fs = require('fs')
var text = fs.readFileSync('/home/bitnami/apps/web/eng.txt','utf8');
var textByline = text.split("\n")

json_list = []

for(let item of textByline){
  json_unit = JSON.parse(item)
  json_list.push(json_unit);
}

console.log(json_list);

app.get('/', function (req, res) {
//     res.send(`<p>Hello World</p>`)
     
       res.render('index',{words: json_list});
});
      let port = 8080;
app.listen(port);
