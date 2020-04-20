const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send( [
        {
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name': 'ddd',
        'birthday': '96666',
        'gender': '남',
        'job':'학생'
      },
      {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': 'www',
        'birthday': '9622566',
        'gender': '남',
        'job':'복학'
      },
      {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': 'dasdd',
        'birthday': '961516',
        'gender': '남',
        'job':'교수'
      }
    
        
    ]);
});

app.listen(port, () => console.log(`listening on port ${port}`));