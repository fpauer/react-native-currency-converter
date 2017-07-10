import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageHalfWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageHalfWidth,
    height: imageHalfWidth,
  },
  image: {
    width: imageHalfWidth / 2,
  },
  text: {
    color: '$white',
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 20,
  },
});
