import { container } from 'tsyringe';

import '@modules/users/providers';
import '@shared/container/providers';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import INotificationRepository from '@modules/notifications/repositories/INotificationRepository';
import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationsRepository';


container.registerSingleton<IAppointmentsRepository>('AppointmentRepository', AppointmentRepository);

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);

container.registerSingleton<IUserTokensRepository>('UserTokensRepository', UserTokensRepository);

container.registerSingleton<INotificationRepository>('NotificationsRepository', NotificationsRepository);
