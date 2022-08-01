import { Router } from 'express';
import multer from 'multer';

import { GET_Loading, POST_Image } from '../controllers/photo.controller';

const router =  Router()

router.route('/pykadex')
.get(GET_Loading)
// .post(multer.single('image'), POST_Image ) // just remove if not working 

export default router