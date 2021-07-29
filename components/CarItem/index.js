import React from 'react';
import {View, Text, ImageBackground } from 'react-native';
import StyledButton from "../StyledButton";

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import home from './cardetails';
import styles from './styles';
const screens={
  home:{
    screen:home
  }
}
const homeStack=createStackNavigator(screens);
const CarItem = (props) => {

  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Login"}
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        />

        <StyledButton
          type="secondary"
          content={"About US"}
          onPress={() => this.props.navigation.navigate('cardetails')}
        />
      </View>

    </View>
  );
};
const AppStackNavigator=createStackNavigator({
  cardetails:cardetails
});
export default CarItem;
export default createAppContainer(homeStack);

