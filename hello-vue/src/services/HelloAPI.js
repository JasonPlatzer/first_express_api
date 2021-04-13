import axios from 'axios'

let base = 'api'
// export default means provide a function
export default {
    getHelloMessage(){
        // the axios call   ggggg
        return axios.get(base).then(response => {
            return response.data
        })
    }
}