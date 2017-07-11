import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import currencies from '../data/currencies';
import { ListItem, Separator} from '../components/List';

const TEMP_CURR_CURRENCY = 'USD';

class CurrencyList extends Component {

  handlePress() {
      console.log('handlePress');
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencies}
          renderItem={({ item }) => <ListItem
                                       text={item}
                                       selected={item === TEMP_CURR_CURRENCY}
                                       onPress={this.handlePress} />}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default CurrencyList;
