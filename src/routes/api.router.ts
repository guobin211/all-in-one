import { Request, Response, Router, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export class Payload {
  subject: any
}
/**
 * middleware 检验token
 * @param req request
 * @param res response
 * @param next next
 */
export function checkJWT(req: Request, res: Response, next: NextFunction) {
  if (!req.headers.authorization) {
    res.send('需要验证token')
  }
  // @ts-ignore
  let token: string = req.headers.authorization.split(' ')[1];
  if (token === null) {
    res.send('token必须要')
  }
  let payload: any = jwt.verify(token, 'secretKey');
  if (!payload) {
    res.status(401).send('token 错误');
  }
  // @ts-ignore
  req.id = payload.subject;
  next();
}

export class ApiRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.buildRoutes();
  }

  private buildRoutes(): void {
    this.router.get('/login', checkJWT, this.checkToken);
    this.router.post('/', this.sendToken)
  }

  checkToken(req: any, res: Response): void {
    if (req.id) {
      res.send({id: req.id, message: '验证成功！'})
    } else {
      res.send('验证失败！')
    }
  }

  sendToken(req: Request, res: Response): void {
    if (req.body === null) {
      res.status(400).send()
    } else {
      let payload: Payload = { subject: req.body.id};
      let token = jwt.sign(payload, 'secretKey');
      res.send({token: token})
    }
  }
}
