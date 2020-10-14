import React from 'react';
import { Grid, Image, Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import sisakovImage from '../../assets/img/github.jpg';

export default function MainPage() {
  return (
    <Grid columns={2} divided style={{ height: '100vh' }}>
      <Grid.Row>
        <Grid.Column color="violet" align="center" style={{ padding: '3em' }}>
          <Image src={sisakovImage} size="small" circular />
          <h1>Stas Isakov</h1>
          <Header as="h2" color="olive">
            Just testing some stuff on this page, please ignore it...
          </Header>
        </Grid.Column>
        <Grid.Column color="blue" style={{ padding: '3em' }}>
          <h2>Skills:</h2>
          <p>Great in picking colors for this page :)</p>
          <Button as={Link} to="/cv">
            Link
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
