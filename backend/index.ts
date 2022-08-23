import * as express from 'express'
import * as bodyparser from 'body-parser'

const app = express()
const jsonParser = bodyparser.json()
var urlencodedParser = bodyparser.urlencoded({ extended: false })
app.post('/perro', urlencodedParser, ( req, res )=> {
    console.log(req.body)
    res.send(req.body)
})

app.listen(3000, () => {
    console.log('Me levante')
})