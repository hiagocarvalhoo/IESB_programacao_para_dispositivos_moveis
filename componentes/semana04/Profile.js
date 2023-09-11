import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function Profile({ imgUri, genero, nome, telefone, email }) {

    const pessoa = {
        imgUri: 'https://www.fakepersongenerator.com/Face/male/male20141083560953155.jpg',
        genero: 'Masculino',
        nome: 'Robert A Schmidt',
        email: 'zola_larki10@hotmail.com',
        telefone: '216-244-9778'
    }

    const carros = ['BMW', 'Ferrari', 'Mercedes', 'Audi', 'Fiat']


    return (
        <View style={styles.container}>


            { /* {
                carros.map(carro => {
                    return (<Text >{carro}</Text>)
                })
            }

            <FlatList
                data={carros}
                renderItem={({ item }) => <Text>{item}</Text>}

        /> */ }


            <Image
                source={{ uri: pessoa.imgUri }}
                style={styles.img}
            />


            {
                (pessoa && pessoa.nome) && (
                    <View style={styles.labelContainer}>
                        <Text style={[styles.texto, styles.textoLabel]}>Nome</Text>
                        <Text style={styles.texto}>{pessoa.nome}</Text>
                    </View>
                )
            }


            <View style={styles.labelContainer}>
                <Text style={[styles.texto, styles.textoLabel]}>Telefone</Text>
                <Text style={styles.texto}>{pessoa.telefone}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.texto, styles.textoLabel]}>Email</Text>
                <Text style={styles.texto}>{pessoa.email}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        margin: 20
    }, img: {
        width: 250,
        height: 250,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 500,
        padding: 20
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20
    },
    texto: {
        fontSize: 20
    },
    textoLabel: {
        color: 'gray',
        fontWeight: 'bold'
    }
})