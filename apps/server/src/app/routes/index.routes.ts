import { Router } from 'express';

import multer from 'multer';
import { MulterRequest } from '../../model/Photo';
const upload = multer({ dest: 'uploads/' })

import { GET_Loading, POST_Image } from '../controllers/photo.controller';


const router =  Router()

router.get('/pykadex', GET_Loading)
router.post('/pykadex', upload.single('image'), POST_Image)



export default router