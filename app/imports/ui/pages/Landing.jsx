import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className="digits-landing-background ">
          <Grid container centered stackable columns={3}>

            <Grid.Column textAlign='center'>
              <Icon size="huge" name = "users" inverted/>
              <Header as="h1" inverted>Multiple Users</Header>
              <Header as="h3" inverted>This address book enables any number of users to register and save their business contacts.
                You can on see the contacts you have created.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size="huge" name = "file alternate" inverted/>
              <Header as="h1" inverted>Contact Details</Header>
              <Header as="h3" inverted>For each contact, you can save their name, address, and phone number.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size="huge" name = "calendar check" inverted/>
              <Header as="h1" inverted>Timestamped Notes</Header>
              <Header as="h3" inverted>Each time you make contact with a contact, you can write a note that summarizes the conversation.
                This note is save along with a timestamp with the contact</Header>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default Landing;
