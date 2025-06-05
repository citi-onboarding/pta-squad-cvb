import { Router } from 'express';
import { sendMail } from '../controllers/mailControllers';

const MailRouter = Router();

MailRouter.post('/', sendMail);

export default MailRouter;