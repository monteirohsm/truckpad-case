import React, { useState } from 'react';
import { useMotoristas } from '../../context/MotoristasContext';

import { Paper, IconButton, Tooltip } from '@material-ui/core';
import { Container } from './styles';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import FadeIn from 'react-fade-in';
import ModalEdicao from '../ModalEdicao';

function excluir(listaDados, atualizarListaDados, index) {
  const arr = [...listaDados];
  arr.splice(index, 1);
  atualizarListaDados(arr);
}

const PaperMotoristas = ({
  nome,
  cpf,
  telefone,
  dataNasc,
  cnh,
  tipoCNH,
  index,
}) => {
  const { listaDados, atualizarListaDados } = useMotoristas();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <FadeIn delay={200}>
        <Paper className="paper-class">
          <div>
            <div className="icons-div">
              <Tooltip title="Editar">
                <IconButton
                  edge="false"
                  color="secondary"
                  aria-label="menu"
                  onClick={() => setOpen(true)}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Excluir">
                <IconButton
                  onClick={() => {
                    excluir(listaDados, atualizarListaDados, index);
                  }}
                  edge="false"
                  color="secondary"
                  aria-label="menu"
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
            <div className="esquerda">
              <div className="conteudo-esquerda">
                <h4>Nome:</h4>
                <p>{nome}</p>
              </div>

              <div className="conteudo-esquerda">
                <h4>CPF:</h4>
                <p>{cpf}</p>
              </div>

              <div className="conteudo-esquerda">
                <h4>Telefone:</h4>
                <p>{telefone}</p>
              </div>

              <div className="conteudo-esquerda">
                <h4>Data de Nasc:</h4>
                <p>{dataNasc}</p>
              </div>

              <div className="conteudo-esquerda">
                <h4>CNH:</h4>
                <p>{cnh}</p>
              </div>

              <div className="conteudo-esquerda">
                <h4>Tipo de CNH:</h4>
                <p>{tipoCNH}</p>
              </div>
            </div>

            {open ? (
              <ModalEdicao
                open={handleOpen}
                handleClose={handleClose}
                nome={nome}
                cpf={cpf}
                telefone={telefone}
                dataNasc={dataNasc}
                cnh={cnh}
                tipoCNH={tipoCNH}
                index={index}
              />
            ) : null}
          </div>
        </Paper>
      </FadeIn>
    </Container>
  );
};

export default PaperMotoristas;
