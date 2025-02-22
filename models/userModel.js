import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    quote: {
        type: String,
        required:[true, 'Please provide a username.']
    },
    author: {
        type: String,
        required:[true, 'Please provide a email.']
    },
    published: {
        type: String,
        required:[true, 'Please provide a password.']
    },
    title: {
        type: String,
        required:[true, 'Please provide a password.']
    }

}


)

// export default userSchema;
export default mongoose.model('User', userSchema)