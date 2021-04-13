// creates an object that describes how to configure vue developer server
// tells vue developer server if any api requests are made by vue client
// they need to be sent to proxy - the express server
module.exports = {
    devServer: {
        proxy: 'http://127.0.0.1:3000'
    }

}