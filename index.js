import express, {json} from 'express';
import connectDB from './config/db.js';
import { router as userRouter } from './routes/userRoutes.js';

const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());

connectDB();

app.use('/api/users', userRouter)

app.get('/api/hello', (req, res) => {
    res.send('Hello World')
});

app.listen(port, () => {
    console.log(`Active on port ${port}`);
});

