import { Router } from 'express'
import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import uploadConfig from '@config/upload';
import multer from 'multer';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUserService = new CreateUserService();

  const user = await createUserService.execute({
    name,
    email,
    password
  });

  delete user.password;

  return response.json(user);

});

usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), async (request, response) => {
  const updateUserAvatarService = new UpdateUserAvatarService();

  const user = await updateUserAvatarService.execute({
    user_id: request.user.id,
    avatarFilename: request.file.filename
  });

  delete user.password;

  return response.json(user);
});

export default usersRouter;