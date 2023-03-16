// const { timeStamp } = require('console')
const mongoose = require('mongoose')


const Schema = mongoose.Schema

const CaptainSchema = new Schema({
    title: {type: String, required: true},
    entry: {type: String, required: true},
    shipisBroken:{type: Boolean,default: true}
},
{timestamp:true}
)
const Captain = mongoose.model('logs', CaptainSchema)


module.exports = Captain