import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function FrenchFriesRecipe() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: "Crispy French Fries",
          headerStyle: {
            backgroundColor: '#FF6B6B',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
      />
      <ScrollView style={styles.container}>
        <View style={styles.gradientBackground}>
          <View style={styles.recipeHeader}>
            <Text style={styles.title}>Crispy French Fries</Text>
            <View style={styles.infoContainer}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Prep Time</Text>
                <Text style={styles.infoValue}>20 mins</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Cook Time</Text>
                <Text style={styles.infoValue}>25 mins</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Calories</Text>
                <Text style={styles.infoValue}>320 kcal</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Servings</Text>
                <Text style={styles.infoValue}>4</Text>
              </View>
            </View>
          </View>

          <View style={styles.imageContainer}>
            <Image 
              source={require('../../assets/recipes/french-fries.png')}
              style={styles.recipeImage}
            />
          </View>

          <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Ingredients</Text>
            </View>
            <View style={styles.ingredientsList}>
              {[
                '4 large potatoes',
                'Vegetable oil for frying',
                '1 tsp salt',
                '1/2 tsp black pepper',
                '1/2 tsp garlic powder (optional)',
                '1/2 tsp paprika (optional)',
                'Cold water for soaking'
              ].map((ingredient, index) => (
                <View key={index} style={styles.ingredientItem}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text style={styles.ingredient}>{ingredient}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Instructions</Text>
            </View>
            <View style={styles.instructionsList}>
              {[
                'Wash and peel the potatoes. Cut them into even strips about 1/4 inch thick.',
                'Soak the cut potatoes in cold water for 30 minutes to remove excess starch.',
                'Drain and pat the potatoes completely dry with paper towels.',
                'Heat oil in a deep fryer or large pot to 325°F (165°C).',
                'Fry the potatoes in batches for 3-4 minutes until pale and soft. Remove and drain.',
                'Increase oil temperature to 375°F (190°C).',
                'Fry the potatoes again for 3-4 minutes until golden brown and crispy.',
                'Season with salt and your choice of seasonings while hot.'
              ].map((instruction, index) => (
                <View key={index} style={styles.instructionStep}>
                  <View style={styles.stepNumberContainer}>
                    <Text style={styles.stepNumber}>{index + 1}</Text>
                  </View>
                  <Text style={styles.stepText}>{instruction}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.nutritionSection}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Nutrition Facts</Text>
            </View>
            <View style={styles.nutritionContent}>
              <View style={styles.calorieBox}>
                <Text style={styles.calorieNumber}>320</Text>
                <Text style={styles.calorieLabel}>Calories</Text>
              </View>
              <View style={styles.nutritionDetailsContainer}>
                <View style={styles.nutritionRow}>
                  <View style={styles.macroItem}>
                    <View style={styles.macroIconContainer}>
                      <Text style={styles.macroIcon}>🥖</Text>
                    </View>
                    <View style={styles.macroTextContainer}>
                      <Text style={styles.macroLabel}>Carbs</Text>
                      <Text style={styles.macroValue}>42g</Text>
                    </View>
                  </View>
                  <View style={styles.macroItem}>
                    <View style={styles.macroIconContainer}>
                      <Text style={styles.macroIcon}>🥩</Text>
                    </View>
                    <View style={styles.macroTextContainer}>
                      <Text style={styles.macroLabel}>Protein</Text>
                      <Text style={styles.macroValue}>4g</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.nutritionDivider} />
                <View style={styles.nutritionRow}>
                  <View style={styles.macroItem}>
                    <View style={styles.macroIconContainer}>
                      <Text style={styles.macroIcon}>🥑</Text>
                    </View>
                    <View style={styles.macroTextContainer}>
                      <Text style={styles.macroLabel}>Fat</Text>
                      <Text style={styles.macroValue}>15g</Text>
                    </View>
                  </View>
                  <View style={styles.macroItem}>
                    <View style={styles.macroIconContainer}>
                      <Text style={styles.macroIcon}>🔥</Text>
                    </View>
                    <View style={styles.macroTextContainer}>
                      <Text style={styles.macroLabel}>Per Serving</Text>
                      <Text style={styles.macroValue}> 4 </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <Link href="/menu" asChild>
            <TouchableOpacity style={styles.backButton}>
              <Text style={styles.backButtonText}>Back to Menu</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3E50',
  },
  gradientBackground: {
    flex: 1,
    backgroundColor: '#2C3E50',
    backgroundImage: 'linear-gradient(135deg, #2C3E50 0%, #3498DB 100%)',
  },
  recipeHeader: {
    padding: 25,
    backgroundColor: '#FF6B6B',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 25,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    letterSpacing: 0.5,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 15,
    paddingHorizontal: 10,
  },
  infoItem: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 15,
    borderRadius: 18,
    minWidth: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
    transform: [{ translateY: 0 }],
  },
  infoLabel: {
    fontSize: 13,
    color: '#FF6B6B',
    marginBottom: 6,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  infoValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2C3E50',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  recipeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  section: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  sectionTitleContainer: {
    backgroundColor: '#FF6B6B',
    marginHorizontal: -20,
    marginTop: -20,
    marginBottom: 20,
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  ingredientsList: {
    gap: 12,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  bulletPoint: {
    fontSize: 20,
    color: '#FF6B6B',
    marginRight: 10,
    fontWeight: 'bold',
  },
  ingredient: {
    fontSize: 16,
    color: '#495057',
    flex: 1,
  },
  instructionsList: {
    gap: 15,
  },
  instructionStep: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  stepNumberContainer: {
    backgroundColor: '#FF6B6B',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  stepNumber: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  stepText: {
    flex: 1,
    fontSize: 16,
    color: '#495057',
    lineHeight: 24,
  },
  nutritionSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  nutritionContent: {
    padding: 20,
  },
  calorieBox: {
    alignItems: 'center',
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  calorieNumber: {
    fontSize: 42,
    fontWeight: '800',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  calorieLabel: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  nutritionDetailsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  nutritionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  nutritionDivider: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginVertical: 5,
  },
  macroItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  macroIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  macroIcon: {
    fontSize: 20,
  },
  macroTextContainer: {
    flex: 1,
  },
  macroLabel: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  macroValue: {
    fontSize: 18,
    color: '#FF6B6B',
    fontWeight: '700',
  },
  macroSubtext: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  backButton: {
    backgroundColor: '#FF6B6B',
    margin: 20,
    marginTop: 30,
    padding: 20,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
}); 