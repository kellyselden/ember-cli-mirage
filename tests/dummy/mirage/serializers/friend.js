import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  links(friend) {
    return {
      otherFriends: {
        related: `/friends/${friend.id}/other-friends`
      }
    };
  }
});
