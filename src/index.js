const express = require('express');
const cors = require('cors');
const app = require('./app.js');
const movie = require('./movie.js');
const genra = require('./genra.js');
const search = require('./search.js');
const show = require('./show.js');

const index = express();
index.use(cors());
const PORT = 3001;

index.get('/', async ( req, res )=>{
    try {
        res.status(200).json({Welcome: 'The Api Is On. For The Endpoints Please Visit The Github Repo Or Dm To @10th_fail.sayan On Insta.\n This Api Is A Movie Api.'});
    } catch (error) {
        res.status(400).json({warning: '400'});
    }
})

index.use('/api', app);
index.use('/api', movie);
index.use('/api', genra);
index.use('/api', show);
index.use('/api', search);

index.listen(PORT, ()=>{
    console.log('The server is on port  ',PORT);
})
