import { Image, Text, View, StyleSheet } from "react-native";
import { CatalogoCardPage } from "../props/ComponentsCardCatalogo";
import { theme } from "../Theme/Theme";

export function CatalogoPage() {
    return (
        <View>
            <Text style={StyleSheet.title}>Nossos Vinhos</Text>
            <CatalogoCardPage title="Portada Winemaker's"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare
            vitae sapien et euismod. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas."
                image={<Image source={require('../Image/vinho-seco.jpg')} />}
            />
            <CatalogoCardPage title="Portada Winemaker's"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare
            vitae sapien et euismod. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas."
                image={<Image source={require('../Image/vinho-seco.jpg')} />}
            />

        </View>
    );
}

const style = StyleSheet.create({
    title: { 
        fontSize: theme.fonts.sizes.title
    }
})