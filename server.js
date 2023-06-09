require('dotenv').config()
const express = require('express')
const connectDB = require('./Config/db')

const app = express()

connectDB()

const PORT = 8080

const captainRoutes = require('./Routes/CaptainRoutes')


const { createEngine } = require('jsx-view-engine')

const methodOverride = require('method-override')

app.set('view engine', 'jsx')

app.engine('jsx', createEngine())

app.use(express.urlencoded({extended: true}))

app.use(methodOverride('_method'))

app.use(express.static('public'))

app.use((req,res,next)=> {
    console.log('inside middleware')
    console.log(`${req.method} ${req.path}`)     
    next()
})
// app.post('/captain',(req,res)=>{console.log(req.body,"Flight")})
app.use('/captain',captainRoutes) 

// // app.use('/pokemons', pokemonsRoutes)

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})