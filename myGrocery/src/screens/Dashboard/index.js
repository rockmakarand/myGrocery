import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import navigation from '@react-navigation/native';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#24ce85',
          height: 129,
          width: 376,
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 35,
            backgroundColor: '#24ce85',
            paddingTop: 50,
            fontWeight: 'bold',
          }}>
          Dashboard
        </Text>
      </View>
      <Text>{'\n'}</Text>

      <TouchableOpacity
        style={{
          width: 300,
          height: 50,
          borderRadius: 40,
          marginTop: 120,
          backgroundColor: '#24ce85',
          alignItems: 'center',
          alignSelf: 'center',
          textAlign: 'center',
        }}
        // onPress={() => navigation.navigate('contact')}
      >
        <Text style={{color: 'white', fontSize: 20, padding: 10}}>
          Order History
        </Text>
      </TouchableOpacity>

      <Text>{'\n'}</Text>
      <TouchableOpacity
        style={{
          width: 300,
          height: 50,
          borderRadius: 40,
          marginTop: 20,
          backgroundColor: '#24ce85',
          alignItems: 'center',
          alignSelf: 'center',
          textAlign: 'center',
        }}
        // onPress={() => navigation.navigate('contact')}
      >
        <Text style={{color: 'white', fontSize: 20, padding: 10}}>
          Edit Your Profile
        </Text>
      </TouchableOpacity>
      <Text>{'\n'}</Text>

      <TouchableOpacity
        style={{
          width: 300,
          height: 50,
          borderRadius: 40,
          marginTop: 20,
          backgroundColor: '#24ce85',
          alignItems: 'center',
          alignSelf: 'center',
          textAlign: 'center',
        }}
        // onPress={() => navigation.navigate('contact')}
      >
        <Text style={{color: 'white', fontSize: 20, padding: 10}}>
          Edit Your Password
        </Text>
      </TouchableOpacity>
      <Text>{'\n'}</Text>

      <TouchableOpacity
        style={{
          width: 300,
          height: 50,
          borderRadius: 40,
          marginTop: 20,
          backgroundColor: '#24ce85',
          alignItems: 'center',
          alignSelf: 'center',
          textAlign: 'center',
        }}
        // onPress={() => navigation.navigate('contact')}
      >
        <Text style={{color: 'white', fontSize: 20, padding: 10}}>
          About Us
        </Text>
      </TouchableOpacity>
      <Text>{'\n'}</Text>

      <TouchableOpacity
        style={{
          width: 300,
          height: 50,
          borderRadius: 40,
          marginTop: 20,
          backgroundColor: '#24ce85',
          alignItems: 'center',
          alignSelf: 'center',
          textAlign: 'center',
        }}
        // onPress={() => navigation.navigate('contact')}
      >
        <Text style={{color: 'white', fontSize: 20, padding: 10}}>Log Out</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
