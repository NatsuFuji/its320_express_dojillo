import User from '../models/userModel.js'

function createUser(req, res){
    const {quote, author, published, title} = req.body;

    if (!quote || !author || !published || !title) {
        res.send('Please fill out all fields')
    }

    const exists = User.findOne({quote})

    // if (exist) {
    //     res.status(409).send('Username already exists')
    //     throw new Error('Username already exists.')
    // }

    const newUser = User.create({quote,
        author, published, published, title
    }

    )

    if (!newUser) {
        res.status(500).send('Error while creating user.')
    }

    return res.status(200).send('User succesfuly created.')
}

export {createUser};