import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { ErrorBoundary } from 'react-error-boundary'
import Main from './src/router/main';



function ErrorFallback({ error }: { error: Error }) {
  return (
    <View>
      <Text>Something went wrong:</Text>
      <Text>{error.message}</Text>
    </View>
  )
}

export default function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <PaperProvider theme={theme}>
      <NavigationContainer>
        <StatusBar style="auto" />
           < Main/>
      </NavigationContainer>
      </PaperProvider>
      </ErrorBoundary>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: 'rgba(255, 255, 255, 0.1)', // Use transparent to disable the little highlighting oval
  },
};
