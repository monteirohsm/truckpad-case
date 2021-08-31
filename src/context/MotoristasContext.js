import { createContext, useState, useContext } from 'react';
import { dadosAPI } from '../lib/mock/mock';

const MotoristasContext = createContext({});

export function MotoristasContextProvider(props) {
  const [listaDados, atualizarListaDados] = useState(dadosAPI);

  return (
    <MotoristasContext.Provider value={{ listaDados, atualizarListaDados }}>
      {props.children}
    </MotoristasContext.Provider>
  );
}

export function useMotoristas() {
  const motoristas = useContext(MotoristasContext);
  const { listaDados, atualizarListaDados } = motoristas;
  return { listaDados, atualizarListaDados };
}
