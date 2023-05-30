import { ScrollView, StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/common/header/Header'
import Hero from '../../components/common/hero'
import bgImage from "../../../assets/background/hero_bg.png"
import PlanCard from '../../components/dashboard/planCard'
import Colors from '../../themes/Colors'
import CustomTextInput from '../../components/common/input/CustomTextInput'
import { Caption, TouchableRipple } from 'react-native-paper'
import PolicyCard from '../../components/dashboard/policyCard'


const Home = ({navigation}:any) => {
    return (
        <ScrollView style={{ backgroundColor: Colors.bg }}>
            <Hero image={bgImage} >
                <Header showBack={false} />
            </Hero>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ paddingHorizontal: 14, marginTop: -75 }}
                keyExtractor={({ _, index }: any) => index}
                data={[{}, {}]}
                ListEmptyComponent={() => <PlanCard url="createPlan" />}
                renderItem={({ item }: any) => <PlanCard />}
            />
            <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                <CustomTextInput placeholder={'Search for policy'} value={''} onChangeText={function (text: string): void { }} />
            </View>
            <View style={{ paddingHorizontal: 27, paddingBottom: 20 }}>
                <Caption style={{ color: Colors.gray, fontFamily: 'MabryPro' }}>Available Policies</Caption>
            </View>
            <FlatList
                style={{ paddingHorizontal: 14, }}
                keyExtractor={({ _, index }: any) => index}
                data={[{}, {}, {}, {}]}
                ListEmptyComponent={() => <PlanCard url="createPlan" />}
                renderItem={({ item }: any) =>
                    <TouchableRipple style={{ width: "97%", marginHorizontal: 6, marginVertical: 6, }} onPress={()=> navigation.navigate("planDetails")}>
                        <PolicyCard />
                    </TouchableRipple>
                }
            />
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({})