import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import AppointmentRepository from '@modules/appointments/repositories/AppointmentRepository';
import AppError from '@shared/errors/AppError';

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ provider_id, date }: Request): Promise<Appointment> {

    const appointmentRepository = getCustomRepository(AppointmentRepository);
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentRepository.findByDate(appointmentDate);

    if (findAppointmentInSameDate)
      throw new AppError('This appointment is already booked');

    const appointment = await appointmentRepository.create({
      provider_id,
      date: appointmentDate
    });

    return appointment;
  }
}

export default CreateAppointmentService;
