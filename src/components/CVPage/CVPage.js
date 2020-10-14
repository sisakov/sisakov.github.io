import React from 'react';
import { Grid, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import sisakovImage from '../../assets/img/github.jpg';

export default function MainPage() {
  return (
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column color="blue" align="center">
          <Image src={sisakovImage} size="medium" circular />
          <h2> Not Stas Isakov</h2>
        </Grid.Column>
        <Grid.Column color="violet">
          <h2>Skills:</h2>
          <p>Great in picking colors for this page :)</p>
          <Button as={Link} to="/">
            Back
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
