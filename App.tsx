import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { ErrorBoundary } from 'react-error-boundary'
import FlashMessage from "react-native-flash-message";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { useEffect, useState } from 'react';
import useAuthenticationState from './src/states/authentication';
import Auth from './src/router/auth';
import Application from './src/router/application';



function ErrorFallback({ error }: { error: Error }) {
  return (
    <View>
      <Text>Something went wrong:</Text>
      <Text>{error.message}</Text>
    </View>
  )
}

export default function App() {

  const queryClient = new QueryClient()

  const isAuthenticated = useAuthenticationState((state:any) => state.authentication.isAuthenticated);

  const [islogged, setIslogged] = useState(false)


  useEffect(() => {
    if (isAuthenticated) {
      setIslogged(true)
    } else {
      setIslogged(false)
    }
  }, [isAuthenticated])

  if (!islogged) {
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
            <QueryClientProvider client={queryClient}>
              < Auth />
              <FlashMessage position="top" />
            </QueryClientProvider>
          </NavigationContainer>
        </PaperProvider>
      </ErrorBoundary>
    );
  }

  if (islogged) {
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
            <QueryClientProvider client={queryClient}>
              < Application />
              <FlashMessage position="top" />
            </QueryClientProvider>
          </NavigationContainer>
        </PaperProvider>
      </ErrorBoundary>
    );
  }
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: 'rgba(255, 255, 255, 0.1)', // Use transparent to disable the little highlighting oval
  },
};
