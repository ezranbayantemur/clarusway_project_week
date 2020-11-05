import {Dimensions, StyleSheet} from 'react-native';

export const searchbarStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 5,
    margin: 10,
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.8,
  },
  input: {
    paddingVertical: 0,
  },
});

export const cityStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 5,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: "#424242",
    fontWeight: 'bold',
    marginLeft: 5
  },
});

export const detailStyle = StyleSheet.create({
  container: {

  },
  name: {

  },
  address: {

  },
  phone: {

  },
});
