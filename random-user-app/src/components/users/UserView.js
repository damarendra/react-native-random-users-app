
import React from 'react';
import {
  ListItem
} from 'react-native-elements';
import PropTypes from 'prop-types';

import { default as colors } from './../../common/colors';

const UserView = ({
  name,
  email,
  pic,
  id
}) => (
  <ListItem
    title={name}
    subtitle={email}
    leftAvatar={{
      source: pic && { uri: pic },
      rounded: true
    }}
    key={id}
    containerStyle={{
      borderWidth: 1,
      borderColor: colors.light_blue,
      marginVertical: 8
    }}
  />
);

UserView.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  pic: PropTypes.string,
  id: PropTypes.string
};

export default UserView;
