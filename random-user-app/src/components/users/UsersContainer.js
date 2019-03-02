
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  FlatList,
  View
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { default as UserView } from './UserView';
import { default as colors } from './../../common/colors';
import { getUsers, isLoading } from './../../ducks/selectors';
import { action_creators } from './../../ducks/reducers/usersReducer';

/* eslint-disable react/jsx-no-bind */

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    isLoading: isLoading(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRandomUsers: () => dispatch(action_creators.fetch_random_user())
  };
};

class UsersContainer extends React.Component {

  static propTypes = {
    users: PropTypes.array,
    fetchRandomUsers: PropTypes.func,
    isLoading: PropTypes.bool
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRandomUsers();
  }

  keyExtractor = (user, index) => index.toString()

  renderUser = ({ item }) => (
    <UserView
      name={ `${item.name.first} ${item.name.last}` }
      email={ item.email }
      pic={ item.picture.large }
      id={ item.login.uuid }
    />
  )

  renderLoading = () => {
    return (
      this.props.isLoading ?
      <View style={{flex:1, justifyContent:"center"}}>
        <ActivityIndicator size="large" color={colors.dark_blue} />
      </View>
      :
      null
    );
  }

  render() {
    if(this.props.users && this.props.users.length > 0)
      return (
        <FlatList
          style={styles.container}
          data={this.props.users}
          renderItem={this.renderUser}
          keyExtractor={this.keyExtractor}
          onEndReached={ () => this.props.fetchRandomUsers() }
          onEndReachedThreshold={0.8}
          ListFooterComponent={this.renderLoading}
        />
      );
    else
      return this.renderLoading();
  }

}

const styles = StyleSheet.create(
  {
    container: {
      // marginTop: 5,
      backgroundColor: colors.gray
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
