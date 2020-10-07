import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import sisakovImage from '../../assets/img/sisakov.jpg';

function App() {
  return (
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column color="blue" align="center">
          <Image src={sisakovImage} size="medium" circular />
          <h2>Stas Isakov</h2>
        </Grid.Column>
        <Grid.Column color="violet">
          <h2>Skills:</h2>
          <p>Work in progress :)</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
