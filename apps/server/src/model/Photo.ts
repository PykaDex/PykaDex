import { Request, Response } from 'express';

export interface MulterRequest extends Request {
    file: any;
}

export interface MulterResponse extends Response {
    file: any;
}