import { Request, Response } from 'express';
import { getStatus, getHello } from './service';

async function Status (req: Request, res: Response) {
    const report = await getStatus();
    return res
    .status(200)
    .contentType('application/json')
    .send(report);
};

async function Hello (req: Request, res: Response) {
    // read name parameter from request
    const name = req.query.name;
    const msg = await getHello(name as string);
    
    return res
    .status(200)
    .contentType('application/json')
    .send(msg);
};

export { Status, Hello};

