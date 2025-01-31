import { StyleSheet, SafeAreaView, View, Text, Appearance, Image } from 'react-native';
import { Link } from 'expo-router';

import { Colors } from '@/constants/Colors';

export default function ContactScreen() {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const imgColor = colorScheme === 'dark' ? 'papayawhip' : '#333';

  const styles = createStyles(theme, colorScheme);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.imgContainer}>
        {/* Use an image related to the recipe */}
        <Image
          source={require('@/assets/images/recipe1.png')} // Make sure the image path is correct
          style={styles.recipeImage}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Recipe book</Text>

        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text>Recipe book</Text>{'\n'}
            <Text>Hyderabad, Vansthalipuram, 500070</Text>
          </Text>
        </View>

        <View style={styles.textView}>
          <Text style={styles.text}>
            Phone:{'\n'}
            <Link href="tel:5555555555" style={styles.link}>9912378902</Link>{'\n'}
            or{' '}
            <Link href="sms:5555555555" style={styles.link}>Click Here to Text!</Link>
          </Text>
        </View>

        <View style={styles.textView}>
          <Text style={styles.text}>
            Hours:{'\n'}
            <Text>Open 6am to 4pm daily.</Text>{'\n'}
          </Text>
        </View>

      </View>

    </SafeAreaView>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      paddingTop: 0,
      flexGrow: 1,
    },
    imgContainer: {
      backgroundColor: colorScheme === 'dark' ? '#353636' : '#D0D0D0',
      height: 250,
      justifyContent: 'center',
      alignItems: 'center', // Center the image
      width: '100%', // Make the container full width
    },
    recipeImage: {
      width: '100%', // Make the image take up the full width of the container
      height: '100%', // Make the image take up the full height of the container
      resizeMode: 'cover', // Make sure the image covers the entire container without distortion
    },
    textContainer: {
      backgroundColor: theme.background,
      padding: 12,
    },
    title: {
      color: theme.text,
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 32,
      marginBottom: 10,
    },
    textView: {
      marginBottom: 10,
    },
    text: {
      color: theme.text,
      fontSize: 16,
      lineHeight: 24,
    },
    link: {
      textDecorationLine: 'underline',
    },
  });
}
