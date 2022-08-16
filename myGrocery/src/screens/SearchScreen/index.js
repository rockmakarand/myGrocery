import React from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {Appbar, Searchbar, Divider} from 'react-native-paper';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <Appbar.Header style={{backgroundColor: '#f6f6f6'}}>
        <Appbar.BackAction />

        <Appbar.Content
          title="Search"
          titleStyle={{
            fontSize: 30,
            fontWeight: 'bold',
            marginRight: 40,
            paddingTop:45,
            textAlign: 'center',
            
          }}
        />
      </Appbar.Header>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          borderRadius: 50,
          marginTop: 50,
          marginLeft: 10,
          marginRight: 10,
        }}
      />
      <ScrollView style={styles.scroll}>
        <View>
          <Text style={styles.card}>Search Results</Text>
        </View>
        <Divider
          style={{
            height: 1,
            backgroundColor: 'gray',
            marginLeft: 25,
            marginRight: 25,
            color:'black'
          }}
        />
        <View>
          <Text style={styles.card}>Search Results</Text>
        </View>
        <Divider
          style={{
            height: 1,
            backgroundColor: 'gray',
            marginLeft: 18,
            marginRight: 18,
          }}
        />
        <View>
          <Text style={styles.card}>Search Results</Text>
        </View>
        <Divider
          style={{
            height: 1,
            backgroundColor: 'gray',
            marginLeft: 18,
            marginRight: 18,
          }}
        />
        <View>
          <Text style={styles.card}>Search Results</Text>
        </View>
        <Divider
          style={{
            height: 1,
            backgroundColor: 'gray',
            marginLeft: 18,
            marginRight: 18,
          }}
        />
        <View>
          <Text style={styles.card}>Search Results</Text>
        </View>
        <Divider
          style={{
            height: 1,
            backgroundColor: 'gray',
            marginLeft: 18,
            marginRight: 18,
          }}
        />
        <View>
          <Text style={styles.card}>Search Results</Text>
        </View>
        <Divider
          style={{
            height: 1,
            backgroundColor: 'gray',
            marginLeft: 18,
            marginRight: 18,
          }}
        />
        <View>
          <Text style={styles.card}>Search Results</Text>
        </View>
        <Divider
          style={{
            height: 1,
            backgroundColor: 'gray',
            marginLeft: 18,
            marginRight: 18,
          }}
        />
        <View>
          <Text style={styles.card}>Search Results</Text>
        </View>
        <Divider
          style={{
            height: 1,
            backgroundColor: 'gray',
            marginLeft: 18,
            marginRight: 18,
          }}
        />
        <View>
          <Text style={styles.card}>Search Results</Text>
        </View>
        <Divider
          style={{
            height: 1,
            backgroundColor: 'gray',
            marginLeft: 18,
            marginRight: 18,
          }}
        />
        <View>
          <Text style={styles.card}>Search Results</Text>
        </View>
        <Divider
          style={{
            height: 1,
            backgroundColor: 'gray',
            marginLeft: 18,
            marginRight: 18,
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    height: '100%',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  card: {
    marginTop: 40,
    fontSize: 18,
    marginLeft: 30,
    borderBottomWidth: 1,
    color:'black'

  },
});

export default Search;
