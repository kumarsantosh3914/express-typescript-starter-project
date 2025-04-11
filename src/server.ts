import express, { Request, Response } from 'express';
import { Express } from 'express';

const app: Express = express();

const PORT: number = 3001;

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})