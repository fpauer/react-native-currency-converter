import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { TextInputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.4';
const TEMP_CONVERSION_RATE = 0.79;
const TEMP_CONVERSION_DATE = new Date();

export default class Home extends Component {
  handlePressBaseCurrency() {
      console.log('handlePressBaseCurrency CLICKED');
  }

  handlePressQuoteCurrency() {
      console.log('handlePressQuoteCurrency CLICKED');
  }

  handleTextChange(text) {
      console.log('handleTextChange: ', text);
  }

  handlePressSwapCurrency() {
      console.log('handlePressSwapCurrency');
  }

  handleOptionsPress() {
      console.log('handleOptionsPress');
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress}/>
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <TextInputWithButton
            onPress={this.handlePressBaseCurrency}
            buttonText={TEMP_BASE_CURRENCY}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <TextInputWithButton
            onPress={this.handlePressQuoteCurrency}
         buttonText={TEMP_QUOTE_CURRENCY}
              value={TEMP_QUOTE_PRICE}
           editable={false}
          />
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            onPress={this.handlePressSwapCurrency}
         buttonText="Reverse Currencies"
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
