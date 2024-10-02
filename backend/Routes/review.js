import express from 'express'

import {getAllreviews,createReview} from '../controllers/reviewController.js'
import {authenticate,restrict} from './../auth/VerifyToken.js'

const router = express.Router({mergeParams:true});

router.route('/').get(getAllreviews).post (authenticate,restrict(['patient']),createReview)


export default router;