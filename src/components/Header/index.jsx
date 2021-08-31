import React from 'react';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

import { Grid } from '@material-ui/core/';

import { Container, Bar } from './styles';

const Header = () => {
  return (
    <Container>
      <Bar>
        <Grid container justifyContent="center">
          <h1>Truckpad</h1>
          <LocalShippingIcon style={{ margin: '10px 5px', color: '#fad04e' }} />
        </Grid>
      </Bar>
    </Container>
  );
};

export default Header;
