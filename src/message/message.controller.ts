import * as Koa from 'koa';
import * as Router from 'koa-router';
import { getRepository, Repository } from 'typeorm';
import { SendMailOptions } from 'nodemailer';
import mailTransport from '../mailer';
import Message from './message.entity';

const routerOpts: Router.IRouterOptions = {
  prefix: '/messages',
};

const router: Router = new Router(routerOpts);

router.get('/', async (ctx: Koa.Context) => {
  const messageRepo: Repository<Message> = getRepository(Message);

  const messages = await messageRepo.find();

  ctx.body = {
    data: { messages },
  };
});

router.post('/', async (ctx: Koa.Context) => {
  const messageRepo: Repository<Message> = getRepository(Message);

  const message = messageRepo.create(ctx.request.body);

  await messageRepo.save(message);

  const emailMessage: SendMailOptions = {
    from: process.env.MAIL_ADMIN,
    to: process.env.MAIL_ADMIN,
    subject: 'New message from darteil-projects.ru',
    html: ctx.request.body.text,
  };

  mailTransport.sendMail(emailMessage, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  ctx.body = {
    data: { message },
  };
});

export default router;
