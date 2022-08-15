/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, Searchbar, ToggleButton} from 'react-native-paper';
import ModalDropdown from 'native-drop-down';
import {StatusBar} from 'expo-status-bar';

const Home = ({navigation}) => {
  const [value, setValue] = React.useState('left');
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>myGrocery</Text>
        <ToggleButton.Group
          onValueChange={value => setValue(value)}
          value={value}>
          <ToggleButton
            icon="format-align-right"
            value="right"
            style={{marginLeft: 340, marginTop: -45}}
            onPress={() => navigation.navigate('Dashboard')}
          />
        </ToggleButton.Group>
        <Searchbar style={styles.search} />
      </View>
      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 15,
          }}>
          Promotions
        </Text>
        <Text style={{fontStyle: 'italic', marginLeft: 15, marginTop: 3}}>
          For our valued customers
        </Text>
        <ScrollView horizontal={true}>
          <Image
            style={{width: 370, height: 150, marginLeft: 10, marginTop: 20}}
            source={require('../../assets/icon.png')}
          />
          <Image
            style={{width: 370, height: 150, marginLeft: 10, marginTop: 20}}
            source={require('../../assets/icon.png')}
          />
        </ScrollView>
        <Text style={styles.header}>myGrocery Departments</Text>
        <Text style={{fontStyle: 'italic', marginLeft: 30, marginTop: 10}}>
          Our best-selling, new releases
        </Text>
      </View>
      <View style={styles.items}>
        <View>
          <Image
            style={{width: 130, height: 130, marginLeft: 30, marginTop: 20}}
            source={require('../../assets/item_one.png')}
          />
          <ModalDropdown
            style={{width: 130, marginLeft: 30, marginTop: 20}}
            textStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#3498DB',
            }}
            dropdownStyle={{width: 130, height: 130}}
            dropdownTextStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}
            defaultValue="Bakery"
            showsVerticalScrollIndicator={true}
            options={['Cakes', 'Pastries', 'Desserts']}
            defaultIndex={-1}
          />
        </View>
        <View>
          <Image
            style={{width: 130, height: 130, marginLeft: 60, marginTop: 20}}
            source={require('../../assets/item_two.png')}
          />
          <ModalDropdown
            style={{width: 130, marginLeft: 60, marginTop: 20}}
            textStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#3498DB',
            }}
            dropdownStyle={{width: 130, height: 130}}
            dropdownTextStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}
            defaultValue="Bakery"
            showsVerticalScrollIndicator={true}
            options={['Cakes', 'Pastries', 'Desserts']}
          />
        </View>
      </View>
      <View style={styles.items}>
        <View>
          <Image
            style={{width: 130, height: 130, marginLeft: 30, marginTop: 20}}
            source={require('../../assets/item_two.png')}
          />
          <ModalDropdown
            style={{width: 130, marginLeft: 30, marginTop: 20}}
            textStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#3498DB',
            }}
            dropdownStyle={{width: 130, height: 130}}
            dropdownTextStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}
            defaultValue="Bakery"
            showsVerticalScrollIndicator={true}
            options={['Cakes', 'Pastries', 'Desserts']}
          />
        </View>
        <View>
          <Image
            style={{width: 130, height: 130, marginLeft: 60, marginTop: 20}}
            source={require('../../assets/item_one.png')}
          />
          <ModalDropdown
            style={{width: 130, marginLeft: 60, marginTop: 20}}
            textStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#3498DB',
            }}
            dropdownStyle={{width: 130, height: 130}}
            dropdownTextStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}
            defaultValue="Bakery"
            showsVerticalScrollIndicator={true}
            options={['Cakes', 'Pastries', 'Desserts']}
          />
        </View>
      </View>
      <View style={styles.items}>
        <View>
          <Image
            style={{width: 130, height: 130, marginLeft: 30, marginTop: 20}}
            source={require('../../assets/item_one.png')}
          />
          <ModalDropdown
            style={{width: 130, marginLeft: 30, marginTop: 20}}
            textStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#3498DB',
            }}
            dropdownStyle={{width: 130, height: 130}}
            dropdownTextStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}
            defaultValue="Bakery"
            showsVerticalScrollIndicator={true}
            options={['Cakes', 'Pastries', 'Desserts']}
          />
        </View>
        <View>
          <Image
            style={{width: 130, height: 130, marginLeft: 60, marginTop: 20}}
            source={require('../../assets/item_two.png')}
          />
          <ModalDropdown
            style={{width: 130, marginLeft: 60, marginTop: 20}}
            textStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#3498DB',
            }}
            dropdownStyle={{width: 130, height: 130}}
            dropdownTextStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}
            defaultValue="Bakery"
            showsVerticalScrollIndicator={true}
            options={['Cakes', 'Pastries', 'Desserts']}
          />
        </View>
      </View>
      <View style={styles.items}>
        <View>
          <Image
            style={{width: 130, height: 130, marginLeft: 30, marginTop: 20}}
            source={require('../../assets/item_two.png')}
          />
          <ModalDropdown
            style={{width: 130, marginLeft: 30, marginTop: 20}}
            textStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#3498DB',
            }}
            dropdownStyle={{width: 130, height: 130}}
            dropdownTextStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}
            defaultValue="Bakery"
            showsVerticalScrollIndicator={true}
            options={['Cakes', 'Pastries', 'Desserts']}
          />
        </View>
        <View>
          <Image
            style={{width: 130, height: 130, marginLeft: 60, marginTop: 20}}
            source={require('../../assets/item_one.png')}
          />
          <ModalDropdown
            style={{width: 130, marginLeft: 60, marginTop: 20}}
            textStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#3498DB',
            }}
            dropdownStyle={{width: 130, height: 130}}
            dropdownTextStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}
            defaultValue="Bakery"
            showsVerticalScrollIndicator={true}
            options={['Cakes', 'Pastries', 'Desserts']}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 145,
    backgroundColor: '#20cf85',
  },
  containerBox: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  search: {
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
    height: 40,
  },
  header: {
    fontSize: 22,
    marginTop: 20,
    marginLeft: 30,
    fontWeight: 'bold',
  },
  items: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Home;
