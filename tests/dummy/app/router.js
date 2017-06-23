import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contacts', { path: '/' });
  this.route('contact', { path: '/:contact_id' });
  this.route('edit', { path: '/:contact_id/edit' });

  this.route('friends');
  this.route('friend', { path: '/friends/:friend_id' }, function() {
    this.route('other-friends');
  });
  this.route('close-friends');
  this.route('pets');

  this.route('word-smith', { path: '/word-smiths/:word_smith_id' });
});

export default Router;
