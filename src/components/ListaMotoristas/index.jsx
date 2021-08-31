import React from 'react';
import PaperMotoristas from '../PaperMotoristas';
import { useMotoristas } from '../../context/MotoristasContext';

import { Grid } from '@material-ui/core/';

const ListaMotoristas = () => {
  const { listaDados } = useMotoristas();

  return (
    <>
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
