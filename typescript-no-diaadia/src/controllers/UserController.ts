// Pattern 'class' utilizado no exemplo abaixo (ler sobre design patterns)

/** Inferindo a tipagem manualmente  */
import { Request, Response } from "express";
import MailService from "../services/MailService";





class UserController {
  findAll(req: Request, res: Response) {
    return res.json({
      users: [
        {
          name: 'Gustavo',
          email: 'gu@mail.com',
        },
      ],
    });
  }

  create(req: Request, res: Response) {
    const { name, email } = req.body;


    MailService.sendMail(
      {
        to: {
          name,
          email,
        },
        message: {
          subject: 'Opa',
          body: `Blz ${name}, só pra falar que tá OK!`,
        },
      }
    )


    return res.json({
      name,
      email
    })
  }
}

export default new UserController();