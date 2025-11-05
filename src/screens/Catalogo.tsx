import { Image, Text, View, StyleSheet } from "react-native";
import { CatalogoCardPage } from "../props/ComponentsCardCatalogo";
import { theme } from "../Theme/Theme";

export function CatalogoPage() {
    return (
        <View>
            <Text style={styles.title}>Nossos Vinhos</Text>
            <Text style={styles.subTitle}>Trabalhamos como o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.
            </Text>
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
            <CatalogoCardPage title="Portada Winemaker's"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare
            vitae sapien et euismod. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas."
                image={<Image source={require('../Image/vinho-seco.jpg')} />}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    title: { 
        fontSize: theme.fonts.sizes.titleWine,
        fontWeight: 700,
        paddingTop: 16,
        paddingLeft: 16
    },
    subTitle: { 
        paddingTop: 16,
        paddingLeft: 16,
        fontSize: theme.fonts.sizes.textWine
    }
})