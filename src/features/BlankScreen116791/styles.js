import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCFCFC',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notification: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#4a4a4a',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
  },
  avatarTitle: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
    color: '#616161',
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 1,
    marginRight: 5,
  },
  text: {
    color: 'black',
  },
  textTime: {
    color: 'black',
    marginTop: 5,
  },
});
