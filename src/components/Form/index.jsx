import { React, useState } from 'react';
import { useMotoristas } from '../../context/MotoristasContext';
import { Link } from 'react-router-dom';

import {
  Grid,
  TextField,
  Button,
  Snackbar,
} from '@material-ui/core/';
import MuiAlert from '@material-ui/lab/Alert';
import InputMask from 'react-input-mask';

import { Formik } from 'formik';
import FadeIn from 'react-fade-in';
import { Container, Title} from './styles';

function limparValues(values) {
  values.nome = '';
  values.cpf = '';
  values.telefone = '';
  values.data = '';
  values.cnh = '';
  values.tipoCNH = '';
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Form = () => {
  const { listaDados, atualizarListaDados } = useMotoristas();

  const [notificacao, setNotificacao] = useState(false);

  const notificar = () => {
    setNotificacao(true);
  };

  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setNotificacao(false);
  };

  return (
    <Container>
      <Grid container justify="center"
      >
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          alignItems="center"
          
        >
          <FadeIn delay={300}>
            <Title variant="h5">CADASTRE UM MOTORISTA</Title>
          </FadeIn>
        </Grid>

        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Formik
            initialValues={{
              nome: '',
              telefone: '',
              data: '',
              cnh: '',
              tipoCNH: '',
              cpf: '',
            }}
            validate={(values) => {
              const errors = {};
              if (!values.nome) {
                errors.nome = 'Campo obrigatório!';
              } else if (!values.cpf | (values.cpf.length < 14)) {
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
              console.log(values.cpf.length);

              atualizarListaDados([...listaDados, dadosMotorista]);
              notificar();

              limparValues(values);
              setSubmitting(false);
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
                <Grid container spacing={4}>
                  <Grid item xs={12} lg={12}>
                    <FadeIn delay={300}>
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
                    </FadeIn>
                  </Grid>
                </Grid>
                <Grid container spacing={4}>
                  <Grid item xs={12} lg={12}>
                    <FadeIn delay={300}>
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
                    </FadeIn>
                  </Grid>
                </Grid>

                <Grid container spacing={4}>
                  <Grid item xs={12} lg={6}>
                    <FadeIn delay={300}>
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
                      {errors.telefone && touched.telefone && errors.telefone}
                    </FadeIn>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <FadeIn delay={300}>
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
                    </FadeIn>
                  </Grid>
                </Grid>

                <Grid container spacing={4}>
                  <Grid item xs={12} lg={6}>
                    <FadeIn delay={300}>
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
                    </FadeIn>
                    {errors.cnh && touched.cnh && errors.cnh}
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <FadeIn delay={300}>
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
                    </FadeIn>
                    {errors.tipoCNH && touched.tipoCNH && errors.tipoCNH}
                  </Grid>
                </Grid>

                <Grid container xs={12} lg={12}>
                  <Grid style={{ width: '100%' }}>
                    <FadeIn delay={500}>
                      <Button
                        type="submit"
                        variant="outlined"
                        disabled={isSubmitting}
                        className="btn-class"
                        fullWidth
                      >
                        Cadastrar
                      </Button>
                    </FadeIn>
                  </Grid>

                  <Link to="/motoristas" style={{ width: '100%' }}>
                    <FadeIn delay={600}>
                      <Button
                        fullWidth
                        type="submit"
                        variant="outlined"
                        disabled={isSubmitting}
                        className="btn-class"
                        style={{marginBottom: '16px'}}
                      >
                        VER MOTORISTAS
                      </Button>
                    </FadeIn>
                  </Link>
                </Grid>
              </form>
            )}
          </Formik>
          <Snackbar
            open={notificacao}
            autoHideDuration={3000}
            onClose={handleCloseSnackBar}
          >
            <Alert onClose={handleCloseSnackBar} severity="success">
              Motorista cadastrado com sucesso!
            </Alert>
          </Snackbar>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Form;
