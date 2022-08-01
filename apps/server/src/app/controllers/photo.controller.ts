import { Request, Response } from 'express';
import { MulterRequest } from '../../model/Photo';
import { spawn } from 'child_process';

import getLoading from '../../assets/loading';
import getPokemon from './utility';


export async function GET_Loading(req: Request, res:Response) {
    res.send({ images: getLoading() })
}

export async function POST_Image(req: MulterRequest, res:Response) {
    const image = req.file;

    const runPy = new Promise(function (success, failure) {
        const pythonProcess = spawn('python', [
            '/Users/harry/pykadex/apps/server/src/app/controllers/mockPy.py', //arguments added here 
        ]);

        pythonProcess.stdout.on('data', function (data) {
            success(JSON.parse(data));
        });

        pythonProcess.stderr.on('data', (data) => {
            failure(data);
        });
    });

    runPy.then(function (pyId) {
        res.send(getPokemon(pyId))
    });
    
    res.json({
        message: "photo successfully saved",
    })
}

