import { Request, Response } from 'express';

import { MulterRequest } from 'apps/server/src/model/Photo';

import getLoading from 'apps/server/src/assets/loading';

export async function GET_Loading(req: Request, res:Response) {
    res.send({ images: getLoading() })
}

export async function POST_Image(req: MulterRequest, res:Response) {
    const image = req.file;
    return res.json({
        message: "photo successfuly saved",
        image
    })
}
