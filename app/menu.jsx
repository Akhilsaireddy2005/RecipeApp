import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image, ImageBackground } from "react-native";

import { Colors } from '@/constants/Colors';
import { MENU_ITEMS } from '@/constants/MenuItems';
import MENU_IMAGES from '@/constants/MenuImages';

export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme);
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const separatorComp = <View style={styles.separator} />;
    const footerComp = <Text style={{ color: theme.text }}>End of Menu</Text>;

    return (
        <ImageBackground
            source={require('@/assets/images/image.png')} // Replace with your image path
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <Container>
                <FlatList
                    data={MENU_ITEMS}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainer}
                    ItemSeparatorComponent={separatorComp}
                    ListFooterComponent={footerComp}
                    ListFooterComponentStyle={styles.footerComp}
                    ListEmptyComponent={<Text>No items</Text>}
                    renderItem={({ item }) => (
                        <View style={styles.row}>
                            <View style={styles.menuTextRow}>
                                <Text style={[styles.menuItemTitle, styles.menuItemText]}>
                                    {item.title}
                                </Text>
                                <Text style={styles.menuItemText}>{item.description}</Text>
                            </View>
                            <Image
                                source={MENU_IMAGES[item.id - 1]}
                                style={styles.menuImage}
                            />
                        </View>
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
            maxWidth: 600,
            height: 110,
            marginBottom: 10,
            borderStyle: 'solid',
            borderColor: '#1E90FF', // Blue border color for both light and dark modes
            borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden',
            marginHorizontal: 'auto',
        },
        menuTextRow: {
            width: '65%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1,
        },
        menuItemTitle: {
            fontSize: 18,
            textDecorationLine: 'underline',
            color: '#1E90FF', // Blue title for better contrast
        },
        menuItemText: {
            color: theme.text, // Ensure the text color is correct based on theme
        },
        menuImage: {
            width: 100,
            height: 100,
        },
    });
}
