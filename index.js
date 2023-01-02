const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) =>{
    res.render('home');
});

app.get('/Topmovies',(req ,res)=>{
    res.render('Topmovies',{pageName: 'Topmovies'})
})

app.get('/about',(req ,res)=>{
    res.render('about',{pageName: 'about'})
})

app.get('/Interests',(req ,res)=>{
    




    res.render('Interests',{pageName: 'Interests'});
})

// app.get('/',(req ,res)=>{
//     res.render('',{pageName: ''});
// })



app.listen(3000, () => {
    console.log('app listening on http://localhost:3000');
});