import { Pressable, View, Text } from "react-native";

//Props
function CategoryGridTile({title,color}){
    return <View>
        <Pressable>
          <View>
            <Text>{title}</Text>
          </View>
        </Pressable>

    </View>
}
export default CategoryGridTile;