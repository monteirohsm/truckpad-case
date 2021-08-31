import { dadosAPI } from '../../lib/mock/mock';

export const getMotoristas = async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(dadosAPI);
    }, 1000)
  );
};
