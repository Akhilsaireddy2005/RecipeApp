import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import { Colors } from '@/constants/Colors';
import { Snacks_ITEMS } from '@/constants/SnacksItems';
import Snacks_IMAGES from '@/constants/SnacksImages';

export default function SnacksScreen() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const router = useRouter();

    const styles = createStyles(theme, colorScheme);
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const separatorComp = <View style={styles.separator} />;
    const footerComp = <Text style={{ color: theme.text }}>End of Snacks</Text>;

    const handleItemPress = (item) => {
        if (item.route) {
            router.push(item.route);
        }
    };

    return (
        <ImageBackground
            source={require('@/assets/images/snacksb1.png')} // Replace with your image path
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <Container>
                <FlatList
                    data={Snacks_ITEMS}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainer}
                    ItemSeparatorComponent={separatorComp}
                    ListFooterComponent={footerComp}
                    ListFooterComponentStyle={styles.footerComp}
                    ListEmptyComponent={<Text>No items</Text>}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={styles.row}
                            onPress={() => handleItemPress(item)}
                            activeOpacity={0.7}
                        >
                            <View style={styles.snacksTextRow}>
                                <Text style={[styles.snacksItemTitle, styles.snacksItemText]}>
                                    {item.title}
                                </Text>
                                <Text style={styles.snacksItemText}>{item.description}</Text>
                            </View>
                            <Image
                                source={Snacks_IMAGES[item.id - 1]}
                                style={styles.snacksImage}
                            />
                        </TouchableOpacity>
                    )}
                />
            </Container>
        </ImageBackground>
    );
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        backgroundImage: {
            flex: 1, // Ensures the background image covers the entire screen
            width: '100%',
            height: '100%',
            justifyContent: 'center', // Centers the content vertically if needed
        },
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background, // Ensure the content has the correct background
            opacity: 0.9, // Optionally, reduce the opacity for the content area to allow the image to show through slightly
        },
        separator: {
            height: 1,
            backgroundColor: colorScheme === 'dark' ? '#fff' : "#000", // Set separator color to white in dark mode
            width: '50%',
            maxWidth: 300,
            marginHorizontal: 'auto',
            marginBottom: 10,
        },
        footerComp: {
            marginHorizontal: 'auto',
        },
        row: {
            flexDirection: 'row',
            width: '100%',
            maxWidth: 500,
            height: 158,
            marginBottom: 15,
            borderStyle: 'solid',
            borderColor: '#1E90FF', // Blue border color for both light and dark modes
            borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden',
            marginHorizontal: 'auto',
        },
        snacksTextRow: {
            width: '65%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1,
        },
        snacksItemTitle: {
            fontSize: 18,
            textDecorationLine: 'underline',
            color: '#1E90FF', // Blue title for better contrast
        },
        snacksItemText: {
            color: theme.text, // Ensure the text color is correct based on theme
        },
        snacksImage: {
            width: 120,
            height: 155,
        },
    });
}
