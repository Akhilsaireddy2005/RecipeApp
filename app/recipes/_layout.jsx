import { Stack } from 'expo-router';

export default function RecipesLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#FF6B6B',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="chicken-biryani"
        options={{
          headerShown: true,
          title: 'Chicken Biryani',
        }}
      />
      <Stack.Screen
        name="potato-curry"
        options={{
          headerShown: true,
          title: 'Potato Curry',
        }}
      />
      <Stack.Screen
        name="tomato-curry"
        options={{
          headerShown: true,
          title: 'Tomato Curry',
        }}
      />
    </Stack>
  );
} 