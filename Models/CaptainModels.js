// const { timeStamp } = require('console')
const mongoose = require('mongoose')


const Schema = mongoose.Schema

const captainSchema = new Schema({
    title: {type: String, required: true},
    entry: {type: String, required: true},
    shipIsBroken:{type: Boolean}
},
{timestamp:true}
)
const Captain = mongoose.model('logs', captainSchema)


module.exports = Captain