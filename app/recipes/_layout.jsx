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
        name="chicken-curry"
        options={{
          headerShown: true,
          title: 'Chicken Curry',
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
      <Stack.Screen
        name="pulao"
        options={{
          headerShown: true,
          title: 'Pulao',
        }}
      />
      <Stack.Screen
        name="fish-curry"
        options={{
          headerShown: true,
          title: 'Fish Curry',
        }}
      />
      <Stack.Screen
        name="paneer-curry"
        options={{
          headerShown: true,
          title: 'Paneer Curry',
        }}
      />
      <Stack.Screen
        name="pizza"
        options={{
          headerShown: true,
          title: 'Pizza',
        }}
      />
    </Stack>
  );
} 