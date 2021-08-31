import React from 'react';
import PaperMotoristas from '../PaperMotoristas';
import { useHistory } from 'react-router';
import { useMotoristas } from '../../context/MotoristasContext';

import { Grid,IconButton, Typography } from '@material-ui/core/';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { Flex } from './styles';


const ListaMotoristas = () => {
  const history = useHistory();
  const { listaDados } = useMotoristas();

  function handleBack() {
    history.replace('/');
  }

  return (
    <>
     <Flex>
        <IconButton onClick={handleBack} >
          <ChevronLeftIcon />
        </IconButton>
        <Typography style={{ color: '#383838' }} variant="h5">Motoristas Cadastrados</Typography>
      </Flex>
      <Grid container justifyContent="center">
        {listaDados.map((motorista, index) => (
          <PaperMotoristas
          index={index}
          nome={motorista.name}
          cpf={motorista.documents.find((documento) => documento.doc_type === "CPF").number}
          telefone={motorista.telefone ? motorista.telefone : "N/A"}
          dataNasc={new Date(motorista.birth_date).toLocaleDateString("pt-BR") === "Invalid Date" ? motorista.birth_date : new Date(motorista.birth_date).toLocaleDateString("pt-BR").split("/").join("/")}
          cnh={motorista.documents.find((documento) => documento.doc_type === "CNH") ? motorista.documents.find((documento) => documento.doc_type === "CNH").number : "N/A"}
          tipoCNH={motorista.documents.find((documento) => documento.doc_type === "CNH") ? motorista.documents.find((documento) => documento.doc_type === "CNH").category : "N/A"}
          />
        ))}
      </Grid>
    </>
  );
};

export default ListaMotoristas;
