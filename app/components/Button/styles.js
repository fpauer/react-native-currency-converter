import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 19,
    marginRight: 11,
  },
  buttonText: {
    color: '$white',
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 20,
  },
});
