import {StyleSheet, Dimensions} from 'react-native';

export const introPage = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3949ab'
  },
  bannerText: {
    fontSize: 100,
    color: 'white',
    fontFamily: 'Pacifico-Regular'
  },
  buttonContainer: {
    backgroundColor: '#fb8c00',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20
  },
  buttonText: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'Pacifico-Regular'
  }
});

export const finishPage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3949ab',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 100,
    textAlign: 'center',
    fontFamily: 'IndieFlower-Regular'
  }
});
