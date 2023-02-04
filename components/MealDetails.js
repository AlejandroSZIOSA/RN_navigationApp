// Reusable component
import { View,Text,StyleSheet } from "react-native";
// fisxed proplem ({props})
function MealDetails({duration,complexity,affordability,style, texStyle}){
    //overraiding style
    return(
    <View style={[styles.details,style]}>
        <Text style={[styles.detailItem,texStyle]}> {duration} m  </Text>
        <Text style={[styles.detailItem,texStyle]}> {complexity.toUpperCase()} </Text>
        <Text style={[styles.detailItem,texStyle]}> {affordability.toUpperCase()} </Text>
    </View>

    ) ;

}
export default MealDetails;

const styles = StyleSheet.create({
    details:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        padding:8,
    },
    detailItem:{
        marginHorizontal: 4,
        fontSize:12,
    }
})