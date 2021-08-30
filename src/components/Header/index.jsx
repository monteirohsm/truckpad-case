import React from 'react';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

import { Grid } from '@material-ui/core/';

import { Container, Bar } from './styles';

const Header = () => {
  return (
    <Container>
      <Bar>
        <Grid container justifyContent="center">
          <h1 style={{ color: '#f9cd00' }}>Truckpad</h1>
          <LocalShippingIcon style={{ margin: '10px 5px', color: '#f9cd00' }} />
        </Grid>
      </Bar>
    </Container>
  );
};

export default Header;
