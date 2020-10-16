import React from 'react';
import { Grid, Header, Icon, Image, Segment } from 'semantic-ui-react';
import sisakovImage from '../../assets/img/github.jpeg';

export default function MainPage() {
  const gridStyle = { height: '100vh', padding: '3em' };
  return (
    <Grid columns={1} style={gridStyle} verticalAlign="middle">
      <Grid.Column>
        <Grid.Row align="center">
          <Image src={sisakovImage} size="medium" circular />
          <Header as="h1">Hello there! My name is Stas.</Header>
        </Grid.Row>
        <Segment.Group>
          <Segment inverted color="blue">
            This page is just for testing some JS stuff, please ignore it...
          </Segment>
          <Segment inverted secondary color="blue">
            Do you think to hire me for your next &quot;unicorn&quot; startup?
            <br />
            You can find more about my professional skill set on LindedIn. No reason to duplicate it here.
            <br />
            Thank you for visiting!
          </Segment>
          <Segment.Group horizontal>
            <Segment>
              <a href="https://www.linkedin.com/in/stas-isakov/" target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" />
                LindedIn profile
              </a>
            </Segment>
            <Segment>
              <a href="https://github.com/sisakov" target="_blank" rel="noopener noreferrer">
                <Icon name="github" />
                GitHub profile
              </a>
            </Segment>
          </Segment.Group>
        </Segment.Group>
      </Grid.Column>
    </Grid>
  );
}
