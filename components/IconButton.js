import { Pressable,StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'

function IconButton({myIcon,myColor, myOnpress,}){
    return(
        <Pressable 
            onPress={myOnpress} 
            style={({pressed})=> pressed && styles.pressed }
            >
            <Ionicons name = {myIcon} size={24} color={myColor} />

        </Pressable>

    )

}
export default IconButton;

const styles= StyleSheet.create({
    pressed:{
        opacity: 0.7
    }

})