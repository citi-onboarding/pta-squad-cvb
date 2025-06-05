import { Router } from "express";

import  UserRouter  from './UserRouter';
import  AuthRouter  from './AuthRouter';
import  FileRouter  from './FileRouter';
import  MailRouter  from './MailRoutes';

const router = Router();

router.use('/user', UserRouter);
router.use('/sessions', AuthRouter);
router.use('/file', FileRouter);
router.use('/mail', MailRouter);
router.route('/').get((_, res) => {
    res.status(200).send('textotexto');
})

export default router;