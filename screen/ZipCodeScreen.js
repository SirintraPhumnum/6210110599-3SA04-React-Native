import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import { FlatList, View, Text} from "react-native-web";
import{useNavigation} from "@react-navigation/native";

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
    <View style={style.zipItem}>
        <Text>{place}</Text>
        <Text>{code}</Text>
    </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation} />}
        />
    )
}

const style = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    }
})