import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingVertical: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  title: {
    marginTop: 35,
    marginLeft: 25,
    fontSize: 20,
  },

  shadow: {
    // backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  rightButton: {
    position: 'absolute',
    right: 16,
    marginTop: 35,
  },
});
