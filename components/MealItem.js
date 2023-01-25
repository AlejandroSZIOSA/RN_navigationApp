import { View,Text, Pressable,StyleSheet,Image } from "react-native";
function MealItem({title, imageUrl, duration, complexity,affordability }){
    return( 
    <View style = {styles.mealItem}>  
        <Pressable 
          android_ripple={{color:'#ccc'}} 
          style={({pressed}) => (pressed ? styles.buttonPressed : null)
          }
        >
        <View>
         <View>
           {/* an object imageUrl */}
           <Image 
             source={{uri:imageUrl}} 
             style= {styles.image} 
           />
           <Text style={styles.title} >{title}</Text>
         </View>
         <View style={styles.details}>
           <Text style={styles.detailItem}> {duration} m  </Text>
           <Text style={styles.detailItem}> {complexity.toUpperCase()} </Text>
           <Text style={styles.detailItem}> {affordability.toUpperCase()} </Text>
         </View>
        </View>
        </Pressable>
    </View>
    )
};
export default MealItem;

const styles = StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius: 8,
        overflow:Platform.OS === 'android' ? 'hidden': 'visible',//Works with android
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation:4, //shadows
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
    },
    innerContainer:{
        borderRadius: 8,
        overflow: 'hiden'
    },
    image: {
      width:'100%',
      height: 200,
    },
    title:{
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 18,
      margin: 8
    },
    details:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        padding:8,
    },
    detailItem:{
        marginHorizontal: 4,
        fontSize:12
    },
    buttonPressed:{
        opacity: 0.50
    },

});