const express = require('express')
const connectDB = require('./database/conn')
const articleRouter = require('./routes/articles')
const cors = require('cors')
const app = express()

connectDB()

app.use(cors())
app.use('/articles', articleRouter)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description'

    },

    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test description 2'
    }]
    res.render('index', { articles: articles})
})


app.listen (3000)