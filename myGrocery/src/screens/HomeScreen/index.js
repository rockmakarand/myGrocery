/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Pressable, ScrollView, TextInput } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Searchbar, ToggleButton } from 'react-native-paper';
import ModalDropdown from 'native-drop-down';
import { StatusBar } from 'expo-status-bar';
import { Icon } from 'react-native-vector-icons/Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  const [value, setValue] = React.useState('left');
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 30, alignItems: 'center', marginBottom: 10 }}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              source={require('../../assets/h.jpeg')}
              style={{ width: 30, height: 25, marginTop: 45, marginLeft: 40 }}
            />
          </TouchableOpacity>
          <Text style={styles.title}>myGrocery</Text>

        </View>
        <TextInput style={styles.input} placeholder="Search" placeholderTextColor='black' textAlign="left" />
      </View>
      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 15,
            color: 'black',
          }}
        >
          Promotions
        </Text>
        <Text
          style={{
            fontStyle: 'italic',
            marginLeft: 15,
            marginTop: 3,
            color: 'black',
          }}
          onPress={() => navigation.navigate('Search')}>
          For our valued customers
        </Text>
        <ScrollView horizontal={true}>
          <Image
            style={{ width: 370, height: 150, marginTop: 20 }}
            source={require('../../assets/ads.png')}
          />
          <Image
            style={{ width: 370, height: 150, marginTop: 20 }}
            source={require('../../assets/z.jpeg')}
          />
        </ScrollView>
        <Text style={styles.header}>myGrocery Departments</Text>
        <Text
          style={{
            fontStyle: 'italic',
            marginLeft: 30,
            marginTop: 10,
            color: 'black',
          }}>
          Our best-selling, new releases
        </Text>
      </View>
      <View style={styles.items}>
        <View>
          <Image
            style={{ width: 130, height: 130, marginLeft: 30, marginTop: 20 }}
            source={require('../../assets/item_one.png')}
          />
          <ModalDropdown
            style={{ width: 130, marginLeft: 30, marginTop: 20 }}
            textStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#3498DB',
            }}
            dropdownStyle={{ width: 130, height: 130 }}
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
            style={{ width: 130, height: 130, marginLeft: 60, marginTop: 20 }}
            source={require('../../assets/s.jpeg')}
          />
          <ModalDropdown
            style={{ width: 130, marginLeft: 60, marginTop: 20 }}
            textStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#3498DB',
            }}
            dropdownStyle={{ width: 130, height: 130 }}
            dropdownTextStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}
            defaultValue="Chilled"
            showsVerticalScrollIndicator={true}
            options={['Cakes', 'Pastries', 'Desserts']}
          />
          <Image
            style={{ width: 20, height: 10, marginTop: -20, marginLeft: 150 }}
            source={require('../../assets/l.png')}
          />
        </View>
      </View>
      <View style={styles.items}>
        <View>
          <Image
            style={{ width: 130, height: 130, marginLeft: 30, marginTop: 20 }}
            source={require('../../assets/e.jpeg')}
          />
          <ModalDropdown
            style={{ width: 130, marginLeft: 30, marginTop: 20 }}
            textStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#3498DB',
            }}
            dropdownStyle={{ width: 130, height: 130 }}
            dropdownTextStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}
            defaultValue="Vegetables"
            showsVerticalScrollIndicator={true}
            options={['Cakes', 'Pastries', 'Desserts']}
          />
        </View>
        <Image
          style={{ width: 20, height: 10, marginTop: -20, marginLeft: -20 }}
          source={require('../../assets/l.png')}
        />
        <View>
          <Image
            style={{ width: 130, height: 130, marginLeft: 60, marginTop: 20 }}
            source={require('../../assets/item_two.png')}
          />
          <ModalDropdown
            style={{ width: 130, marginLeft: 60, marginTop: 20 }}
            textStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#3498DB',
            }}
            dropdownStyle={{ width: 130, height: 130 }}
            dropdownTextStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}
            defaultValue="Fruits"
            showsVerticalScrollIndicator={true}
            options={['Cakes', 'Pastries', 'Desserts']}
          />
          <Image
            style={{ width: 20, height: 10, marginTop: -20, marginLeft: -20 }}
            source={require('../../assets/l.png')}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 195,
    backgroundColor: '#20cf85',
    color: 'black',
    paddingBottom: 20
  },
  containerBox: {
    flex: 1,
    flexDirection: 'row',
    color: 'black',
  },
  title: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 60,
  },
  search: {
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
    marginTop: -30,
    height: 40,
    color: 'black',
  },
  header: {
    fontSize: 22,
    marginTop: 20,
    marginLeft: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  items: {
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    borderWidth: 1,
    borderColor: '#edeced',
    width: 320,
    height: 50,
    borderRadius: 25,
    marginLeft: 20,
    backgroundColor: '#f5f6f6',
    paddingLeft: 20,
    fontSize: 16,
    color: '#bdbdbd',
  },
});

export default Home;
