const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Last name is required"],
        minLength: [8, "Username must be at least 8 characters"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [12, "Password must be at least 12 characters"]
    },
    roles: {
        type: [String],
        required: [true, "User must have at least one role assigned"],
        default: ["employee"]
    },
    isActive: {
        type: Boolean,
        required: [true, "User must have an isActive status assigned"],
        default: true
    },
    tickets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket"
    }]
}, {timestamps: true})

// * Mongoose Middleware
// Set virtual confirmPassword field to value in form input
// UserSchema.virtual('confirmPassword')

    // .get(function() {
    //     return this.confirmPassword
    // })
    // .set(function(val) {
    //     this.confirmPassword = val
    // })

// Validate that passwords match
// ! Remember to re-enable confirmPassword validation after form is connected
// ! confirmPassword is undefined without connected form
// UserSchema.pre('validate', function(next) {
//     if (this.password !== this.confirmPassword) {
//         this.invalidate(('confirmPassword', 'Passwords must match'))
//     }
//     next()
// })

// Hash password and reset password value to hash value before saving
UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

module.exports = mongoose.model('user', UserSchema)