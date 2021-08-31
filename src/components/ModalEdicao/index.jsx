import { React } from 'react';

import { Button, Fade, Grid, IconButton, TextField } from '@material-ui/core/';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import CloseIcon from '@material-ui/icons/Close';

import { Container, ModalBox, ModalTitle } from './styles';
import InputMask from 'react-input-mask';
import { Formik } from 'formik';
import { useMotoristas } from '../../context/MotoristasContext';

function editar(listaDados, atualizarListaDados, index, dadosMotorista) {
  const arr = [...listaDados];
  arr[index] = dadosMotorista;
  atualizarListaDados(arr);
}

const ModalEdicao = ({
  open,
  handleClose,
  nome,
  cpf,
  telefone,
  dataNasc,
  cnh,
  tipoCNH,
  index,
}) => {
  const { listaDados, atualizarListaDados } = useMotoristas();

  return (
    <Container>
      <Grid>
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Grid container justifyContent="center">
              <ModalBox>
                <IconButton onClick={handleClose} className="closeBtn">
                  <CloseIcon />
                </IconButton>
                <ModalTitle>EDITAR MOTORISTA</ModalTitle>
                <br />
                <Formik
                  initialValues={{
                    nome: nome,
                    telefone: telefone,
                    data: dataNasc,
                    cnh: cnh,
                    tipoCNH: tipoCNH,
                    cpf: cpf,
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.nome) {
                      errors.nome = 'Campo obrigatório!';
                    } else if (!values.cpf) {
                      errors.cpf = 'Campo obrigatório!';
                    } else if (!values.telefone) {
                      errors.telefone = 'Campo obrigatório!';
                    } else if (!values.data) {
                      errors.data = 'Campo obrigatório!';
                    } else if (!values.cnh) {
                      errors.cnh = 'Campo obrigatório!';
                    } else if (!values.tipoCNH) {
                      errors.tipoCNH = 'Campo obrigatório!';
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    const dadosMotorista = {
                      addresses: {
                        city: '',
                        complement: '',
                        country: '',
                        name: '',
                        neighborhood: '',
                        postal_code: '',
                        state: '',
                        street_name: '',
                        street_number: '',
                      },
                      birth_date: values.data,
                      city: '',
                      documents: [
                        {
                          category: values.tipoCNH,
                          country: 'BR',
                          doc_type: 'CNH',
                          expires_at: '',
                          number: values.cnh,
                        },
                        {
                          country: 'BR',
                          doc_type: 'CPF',
                          number: values.cpf,
                        },
                      ],
                      name: values.nome,
                      state: '',
                      telefone: values.telefone,
                    };
                    editar(
                      listaDados,
                      atualizarListaDados,
                      index,
                      dadosMotorista
                    );
                    setSubmitting(false);
                    handleClose();
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} lg={12}>
                          <TextField
                            type="text"
                            name="nome"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.nome}
                            label="Nome"
                            variant="outlined"
                            fullWidth
                            className="input-class"
                          />
                          {errors.nome && touched.nome && errors.nome}
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid item xs={12} lg={12}>
                          <InputMask
                            mask="999.999.999-99"
                            value={values.cpf}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="input-class"
                          >
                            <TextField
                              type="text"
                              name="cpf"
                              label="CPF"
                              variant="outlined"
                              className="input-class"
                              fullWidth
                            />
                          </InputMask>
                          {errors.cpf && touched.cpf && errors.cpf}
                        </Grid>
                      </Grid>

                      <Grid container spacing={3}>
                        <Grid item xs={12} lg={6}>
                          <InputMask
                            mask="(99) 9 9999-9999"
                            value={values.telefone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="input-class"
                          >
                            <TextField
                              type="text"
                              label="Telefone"
                              name="telefone"
                              variant="outlined"
                              className="input-class"
                              fullWidth
                            />
                          </InputMask>
                          {errors.telefone &&
                            touched.telefone &&
                            errors.telefone}
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <InputMask
                            mask="99/99/9999"
                            value={values.data}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className="input-class"
                          >
                            <TextField
                              type="text"
                              label="Data de Nasc."
                              name="data"
                              variant="outlined"
                              className="input-class"
                              fullWidth
                            />
                          </InputMask>
                          {errors.data && touched.data && errors.data}
                        </Grid>
                      </Grid>

                      <Grid container spacing={3}>
                        <Grid item xs={12} lg={6}>
                          <TextField
                            type="text"
                            name="cnh"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.cnh}
                            label="CNH"
                            variant="outlined"
                            className="input-class"
                            fullWidth
                          />
                          {errors.cnh && touched.cnh && errors.cnh}
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <TextField
                            type="text"
                            name="tipoCNH"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.tipoCNH}
                            label="Tipo de CNH"
                            variant="outlined"
                            className="input-class"
                            fullWidth
                          />
                          {errors.tipoCNH && touched.tipoCNH && errors.tipoCNH}
                        </Grid>
                      </Grid>

                      <Button
                        type="submit"
                        variant="outlined"
                        disabled={isSubmitting}
                        className="btn-class"
                        fullWidth
                      >
                        Salvar
                      </Button>
                    </form>
                  )}
                </Formik>
              </ModalBox>
            </Grid>
          </Fade>
        </Modal>
      </Grid>
    </Container>
  );
};

export default ModalEdicao;
