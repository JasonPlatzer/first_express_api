let express = require('express')
// requires routes.js code
let routes = require('./routes/routes.js')
// creates a web app

// tells serverjs that dist files exist
// gets path library
let path = require('path')

let app = express()

//tells to serve files in dist directory hello-vue
app.use(express.static(path.join(__dirname, 'hello-vue', 'dist')))
// tells app to use route  
app.use('/api', routes)
// starts server running, listen on a port if computer has
//  xxx   specified a route use process.env.Port else use 3000
let server = app.listen(process.env.PORT || 3000, function(){
    console.log('Express server running on port', server.address().port)
})