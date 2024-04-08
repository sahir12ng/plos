import React from 'react';
import { RemoveUserLocalUseCase } from '../../../../domain/useCases/RemoveUserLocal';

export const ProfileInfoViewModel = () => {
  const removeSession = async () => {
    await RemoveUserLocalUseCase();
  };

  return {
    removeSession
  };
};

export default ProfileInfoViewModel;
