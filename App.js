import React, { Component } from 'react';  
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm'
import { Header, Button, Spinner } from './src/components/common';

  
class App extends Component {  
  state = { loggedIn: null };
  componentWillMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyD4GIJ4aLAX6D8EevCEcRvMIo6xEuKmH-4",
      authDomain: "authapp-c0871.firebaseapp.com",
      databaseURL: "https://authapp-c0871.firebaseio.com",
      projectId: "authapp-c0871",
      storageBucket: "authapp-c0871.appspot.com",
      messagingSenderId: "672246801943",
      appId: "1:672246801943:web:9714a72beb48a6589c5e52",
      measurementId: "G-YWP1DPNJP5"
    };
    // Initialize Firebase
    if (!firebase.apps.lenght) {
      firebase.initializeApp(firebaseConfig);

      firebase.auth().onAuthStateChanged((user) => {
        if (user){
            this.setState({ loggedIn: true });
        } else {
            this.setState({ loggedIn: false });
        }
      });

    }
  }
  renderContent() {
    switch (this.state.loggedIn) {
    case true:
      return (<Button>
        Log Out
      </Button>)
    case false:
      return <LoginForm />;
    default:
        return <Spinner />;
  }
}  
  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      );
    }

    return <LoginForm />;
  }
  render() {
    return (
      <View>
        <Header title="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
