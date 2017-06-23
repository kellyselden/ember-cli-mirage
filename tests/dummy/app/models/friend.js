import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import Contact from './contact';

export default Contact.extend({
  isYoung: attr('boolean'),

  otherFriends: hasMany()
});
