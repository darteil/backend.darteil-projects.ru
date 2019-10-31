import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import * as cors from '@koa/cors';

import * as logger from 'koa-logger';
import * as json from 'koa-json';

import messageController from './message/message.controller';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = { msg: 'Server is working...' };

  await next();
});

app.use(
  cors({
    origin: '*',
    allowHeaders: ['Content-Type', 'application/json'],
  }),
);
app.use(json());
app.use(logger());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());
app.use(messageController.routes());
app.use(messageController.allowedMethods());

app.on('error', console.error);

export default app;
