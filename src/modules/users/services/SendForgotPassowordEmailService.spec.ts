import "reflect-metadata"

import SendForgotPassowordEmailService from '@modules/users/services/SendForgotPassowordEmailService';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import AppError from '@shared/errors/AppError';
import FakeMailProvider from "@shared/container/providers/MailProvider/fakes/FakeMailProvider";

describe('SendForgotPasswordEmail', () => {
  it('should be able to recover thr password using the email', async () => {
    const fakeMailProvider = new FakeMailProvider();
    const fakeUsersRepository = new FakeUsersRepository();

    const sendMail = jest.spyOn(fakeMailProvider, `sendMail`);

    const sendForgotPassowordEmail = new SendForgotPassowordEmailService(fakeUsersRepository, fakeMailProvider);

    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456'
    })

    await sendForgotPassowordEmail.execute({
      email: 'johndoe@example.com'
    });

    expect(sendMail).toHaveBeenCalled();
  });
});
