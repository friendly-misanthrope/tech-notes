const mongoose = require('mongoose')
const autoIncrement = require('mongoose-plugin-autoinc')

const TicketSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Ticket must be assigned to a user"],
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        maxLength: [64, 'Title must be 64 characters or less']
    },
    body: {
        type: String,
        required: [true, "Ticket body is required"],
        minLength: [12, "Ticket body must be at least 12 characters"],
        maxLength: [220, "Ticket body must be 220 characters or less"]
    },
    isComplete: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

TicketSchema.plugin(autoIncrement.autoIncrement, {
    model: 'Ticket',
    field: 'ticketNums',
    startAt: 4269
})

module.exports = mongoose.model('ticket', TicketSchema)