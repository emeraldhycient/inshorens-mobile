import { StyleSheet, useWindowDimensions, View, FlatList } from 'react-native'
import React from 'react'
import Header from '../../components/common/header/Header'
import Colors from '../../themes/Colors'
import Empty from '../../components/common/Empty'
import Button from '../../components/common/button/Button'
import { Title } from 'react-native-paper'

const Expense = ({ navigation }: any) => {

    const { height } = useWindowDimensions()

    return (
        <View style={{ backgroundColor: Colors.bg, height: "100%" }}>
            <Header showBack={true} title="Expenses planner" titleColor={Colors.black} bgColor={"transparent"} hasBg={true} />
            <View style={{ width: "100%", height: height - 450, justifyContent: "center" }}>
                <FlatList
                    style={{ paddingHorizontal: 14, flex: 1, height: "100%" }}
                    keyExtractor={({ _, index }: any) => index}
                    data={[]}
                    ListEmptyComponent={() => <>
                        <Empty message='No plans available' />
                    </>}
                    ListFooterComponent={() =>
                        <View style={{ width: "66%", alignSelf: "center" }}>
                            <Button onPress={() => navigation.navigate("startClaim")} title="start a plan"></Button>
                        </View>}
                    renderItem={({ item }: any) => <Title style={{ fontFamily: 'MabryPro' }}>existing Expense ? </Title>}
                />

            </View>
        </View>
    )
}

export default Expense

const styles = StyleSheet.create({})