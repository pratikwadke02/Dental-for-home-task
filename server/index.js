const express = require('express');
const cors = require('cors');
const app = express();

var bodyParser = require('body-parser');

var corsOptions = {
    origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));
app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true })); 


app.use(express.static(__dirname + "/public"));



const db = require('./models');
db.sequelize.sync().then(() => {
    console.log('Database is synced');
}).catch((err) => {
    console.log(err);
}
);

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

require('./routes/routes.js')(app);



PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}.`);
});

