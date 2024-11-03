import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './Todo';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
     <Todo/>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});
