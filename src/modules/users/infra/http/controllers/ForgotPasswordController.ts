import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPassowordEmailService from '@modules/users/services/SendForgotPassowordEmailService';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;
    const sendForgotPassowordEmail = container.resolve(SendForgotPassowordEmailService);

    await sendForgotPassowordEmail.execute({ email });

    return response.sendStatus(204).json();
  }
}
