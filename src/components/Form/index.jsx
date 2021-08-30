import React from 'react';

import { Grid, TextField, MenuItem, Button } from '@material-ui/core/';

import { Formik } from 'formik';
import { Container } from './styles';

const categorias = [
  {
    value: 'A',
    label: 'A',
  },
  {
    value: 'B',
    label: 'B',
  },
  {
    value: 'C',
    label: 'C',
  },
  {
    value: 'D',
    label: 'D',
  },
  {
    value: 'E',
    label: 'E',
  },
];

const Form = () => {
  return (
    <Container>
      <Grid container>
        <Grid
          container
          xs={12}
          lg={6}
          justifyContent="center"
          alignItems="center"
        >
          <h1>CADASTRE UM MOTORISTA</h1>
        </Grid>

        <Grid
          container
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
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
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
                  </Grid>
                </Grid>

                <Grid container spacing={4}>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      type="text"
                      name="telefone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.telefone}
                      label="Telefone"
                      variant="outlined"
                      fullWidth
                      className="input-class"
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      id="date"
                      label="Data de Nasc."
                      type="date"
                      defaultValue="2017-05-24"
                      variant="outlined"
                      fullWidth
                      className="input-class"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={4}>
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
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Tipo de CNH"
                      value={values.tipoCNH}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                    >
                      {categorias.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
                <Grid container xs={12} lg={12}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="outlined"
                    disabled={isSubmitting}
                    className="btn-class"
                  >
                    Cadastrar
                  </Button>

                  <Button
                    fullWidth
                    type="submit"
                    variant="outlined"
                    disabled={isSubmitting}
                    className="btn-class"
                  >
                    VER MOTORISTAS
                  </Button>
                </Grid>
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Form;
