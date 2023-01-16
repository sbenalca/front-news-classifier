const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
const cors = require('cors')

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'))
})

router.get('/results',function(req,res){
    res.sendFile(path.join(__dirname+'/results.html'))
})

app.use('/',router)
app.use(express.static(__dirname))
app.use(cors())
app.listen(3000)

console.log('running...')
