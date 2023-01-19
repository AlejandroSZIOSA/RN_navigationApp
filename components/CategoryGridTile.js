import { Pressable, View, Text, StyleSheet,Platform } from "react-native";
//Props / myOnpress prop spect a function :) 
function CategoryGridTile({title,color,myOnPress}){
 return( 
    <View style={styles.gridItem}>
    {/* Pressable */}
      <Pressable 
        android_ripple={{color:'#ccc'}} 
        style={({pressed}) => [styles.button, pressed? styles.buttonPressed : null,
        ]}
        onPress={myOnPress} //going to another screen
        >
        <View style={[styles.innerContainer,{backgroundColor:color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>

    </View>
  );
}
export default CategoryGridTile;

const styles= StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16, // space araund every Item
        height:150,
        borderRadius:8,
        elevation: 4, // for android
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        overflow:Platform.OS === 'android' ? 'hidden': 'visible'//Works with android
    },
    button:{
        flex:1
    },
    buttonPressed:{
        opacity: 0.50
    },
    innerContainer:{
        flex:1, // take much space as can
        padding:16,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },
    title: {
        fontWeight: 'bold',
        fontSize:18
    }
});