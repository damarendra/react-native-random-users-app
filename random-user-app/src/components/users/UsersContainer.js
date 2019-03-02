
import React from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { default as UserView } from './UserView';
import { default as colors } from './../../common/colors';
import { getUsers } from './../../ducks/selectors';
import { action_creators } from './../../ducks/reducers/usersReducer';

const mapStateToProps = (state) => {
  return {
    users: getUsers(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRandomUsers: (page) => dispatch(action_creators.fetch_random_user(page))
  };
};

class UsersContainer extends React.Component {

  static propTypes = {
    users: PropTypes.array,
    fetchRandomUsers: PropTypes.func
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRandomUsers();
  }

  keyExtractor = (user, index) => index

  renderUser = ({ user }) => (
    <UserView
      name={ `${user.name.first} ${user.name.last}` }
      email={ user.email }
      pic={ user.picture.large }
      id={ user.login.uuid }
    />
  )

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.props.users}
        renderItem={this.renderUser}
        keyExtractor={this.keyExtractor}
      />
    );
  }

}

const styles = StyleSheet.create(
  {
    container: {
      marginTop: 5,
      backgroundColor: colors.gray
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
