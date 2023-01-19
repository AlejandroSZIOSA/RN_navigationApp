
import { View,StyleSheet,Text } from "react-native";
import { MEALS } from "../data/dummy-data";

//Object destructing because this component is a child of a stack.screen
function MealsOverviewScreen({route}){
    //extracting categoryId 
    const catId = route.params.categoryId;
    return(
        <View style={styles.container}>
            <Text>Meals Overview Screen {catId}</Text>
        </View>
    );
};
export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:16
    }

})