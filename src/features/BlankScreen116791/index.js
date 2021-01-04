import React, { Component } from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { SlideMenuIcon } from '../../navigator/slideMenuIcon';
import { notification_list } from './store/actions';
import { styles } from './styles';

class Notifications extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />,
      title: 'Notifications',
    };
  };

  componentDidMount() {
    this.props.load();
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.notification}>
        {item.image ? (
          <Image style={styles.avatar} source={{ uri: item.image }} />
        ) : (
          <View style={styles.avatar}>
            <Text style={styles.avatarTitle}>{item.name[0]}</Text>
          </View>
        )}

        <View style={styles.content}>
          <View style={styles.mainContent}>
            <View style={styles.text}>
              <Text>
                <Text>{item.name}</Text>
                <Text> {item.message}</Text>
              </Text>
            </View>
            <Text style={styles.textTime}>
              {moment(item.time)
                .add(item.time, 'seconds')
                .fromNow()}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  renderEmptyContainer = () => {
    return (
      <View style={styles.centerContainer}>
        <Text style={{ textAlign: 'center' }}>No notifications.</Text>
      </View>
    );
  };

  render = () => {
    let { notifications } = this.props;
    return (
      <FlatList
        style={styles.container}
        contentContainerStyle={
          notifications.length == 0 && styles.emptyContainer
        }
        data={notifications}
        renderItem={this.renderItem}
        keyExtractor={item => `${item.id}`}
        ListEmptyComponent={this.renderEmptyContainer}
      />
    );
  };
}

const mapStateToProps = state => {
  return {
    notifications: [
      {
        id: 1,
        name: 'John Doe',
        message: 'liked a photo on your album.',
        image:
          'https://crowdbotics-slack.s3.amazonaws.com/media/components/other_2.png',
        time: '2021-01-04T16:41:15.829Z',
      },
      {
        id: 2,
        name: 'Mary Jane',
        message: 'followed you.',
        image: null,
        time: '2021-01-03T16:41:20.829Z',
      },
      {
        id: 3,
        name: 'John Second',
        message: 'posted a message on your "This is my thread title" thread.',
        image: null,
        time: '2020-12-31T16:41:15.829Z',
      },
    ],
    // notifications: state.notificationsReducer.notifications,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => dispatch(notification_list()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notifications);
