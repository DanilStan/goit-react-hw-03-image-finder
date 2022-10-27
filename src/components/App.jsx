import PropTypes from 'prop-types';
import { Profile } from './Profile';
import { Statistics } from './Statistics';

import user from 'data/user.json';
import data from 'data/data.json';

export const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </>
  );
};

App.prototype = {
  children: PropTypes.node,
};
