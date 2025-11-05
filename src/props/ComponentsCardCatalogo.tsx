import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../Theme/Theme";

type props = { 
    title: string,
    text: string,
    image?: unknown,
}


export function CatalogoCardPage(props: props) { 
    return (
        <View style={styles.containerCard}>
            <View style={styles.cards}>
                <Text style={styles.imageCard}>{props.image}</Text>
                <View style={styles.alingText}>
                    <Text style={styles.titleCard}>{props.title}</Text>
                    <Text style={styles.subTitle}>{props.text}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerCard: { 
        alignItems: 'center',
        marginTop: 16,

    },
    cards: { 
        backgroundColor: theme.colors.secundary,
        width: "95%",
        flexDirection: 'row',
        padding: 10,
        borderRadius: 16,        
    },
    titleCard: { 
        fontSize: theme.fonts.sizes.subTitle,
        fontWeight: 600,
        color: theme.colors.active,
        marginBottom: 20
    },
    textCard: { 
        
    },
    imageCard: { 
        width: 33,
        height: 150,
        marginLeft: 30
    },
    alingText: { 
        flexShrink: 1,
        marginLeft: 20,

    },
    subTitle: { 
        color: theme.colors.active,
    }
});