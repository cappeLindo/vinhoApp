import { Image, Text, View } from "react-native";
import { CatalogoCardPage } from "../props/ComponentsCardCatalogo";

export function CatalogoPage() {
    return (
        <View>
            <Text>Nossos Vinhos</Text>
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