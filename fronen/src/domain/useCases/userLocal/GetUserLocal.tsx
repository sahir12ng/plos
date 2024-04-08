import { UserLocalRepositoryImp } from '../../../data/repositories/UserLocalrepository';

export const GetUserLocalUseCase = async () => {
  const userLocalRepository = new UserLocalRepositoryImp();
  return await userLocalRepository.getUser();
};
