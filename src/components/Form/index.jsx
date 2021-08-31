import { React } from 'react';
import { useMotoristas } from '../../context/MotoristasContext';
import { Link } from 'react-router-dom';
// import { getMotoristas } from '../../services/api/api';

import { Grid, TextField, MenuItem, Button } from '@material-ui/core/';
import InputMask from 'react-input-mask';

import { Formik } from 'formik';
import FadeIn from 'react-fade-in';
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

function limparValues(values) {
  values.nome = '';
  values.cpf = '';
  values.telefone = '';
  values.data = '';
  values.cnh = '';
  values.tipoCNH = '';
}

const Form = () => {
  const { listaDados, atualizarListaDados } = useMotoristas();

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
          <FadeIn delay={400}>
            <h1>CADASTRE UM MOTORISTA</h1>
          </FadeIn>
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
                    number: '',
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

              atualizarListaDados([...listaDados, dadosMotorista]);

              // console.log(listaDados);
              console.log(dadosMotorista);
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
                    <FadeIn delay={400}>
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
                    </FadeIn>
                  </Grid>
                </Grid>
                <Grid container spacing={4}>
                  <Grid item xs={12} lg={12}>
                    <FadeIn delay={400}>
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
                    </FadeIn>
                  </Grid>
                </Grid>

                <Grid container spacing={4}>
                  <Grid item xs={12} lg={6}>
                    <FadeIn delay={400}>
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
                    </FadeIn>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <FadeIn delay={400}>
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
                    </FadeIn>
                  </Grid>
                </Grid>

                <Grid container spacing={4}>
                  <Grid item xs={12} lg={6}>
                    <FadeIn delay={400}>
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
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <FadeIn delay={400}>
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
                    </FadeIn>
                  </Grid>
                </Grid>

                <Grid container xs={12} lg={12}>
                  <Grid style={{ width: '100%' }}>
                    <FadeIn delay={600}>
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
                    <FadeIn delay={700}>
                      <Button
                        fullWidth
                        type="submit"
                        variant="outlined"
                        disabled={isSubmitting}
                        className="btn-class"
                      >
                        VER MOTORISTAS
                      </Button>
                    </FadeIn>
                  </Link>
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
