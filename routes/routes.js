// brings express library to file
let express = require('express')
// creates a router which runs code in response to requests to server
let router = express.Router()
// .get is a request that fetches data '/' is a path
// req is request client has made, res is response from server
// any request to / will return message: hello
router.get('/', function(req, res, next){
    res.json( {'message': 'hello!'} )
})
// allows another file to include or require this code
module.exports = router