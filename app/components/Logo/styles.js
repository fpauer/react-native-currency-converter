import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageHalfWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $largeContainerSize: imageHalfWidth,
  $largeImageSize: imageHalfWidth / 2,
  $smallContainerSize: imageHalfWidth / 2,
  $smallImageSize: imageHalfWidth / 4,

  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerSize',
    height: '$largeContainerSize',
  },
  image: {
    width: '$largeImageSize',
  },
  text: {
    color: '$white',
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
  },
});
