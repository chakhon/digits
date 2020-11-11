import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../api/contact/Contact';

function addContact(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Contacts.collection.insert(data);
}

if (Contacts.collection.find().count() === 0) {
  if (Meteor.settings.defaultContact) {
    console.log('Creating default data.');
    Meteor.settings.defaultContact.map(data => addContact(data));
  }
}
