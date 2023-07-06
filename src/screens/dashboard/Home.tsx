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
import { useQuery } from 'react-query'
import { getPolicies } from '../../services/backend/policy.service'
import { Alert } from '../../helpers/alert'
import Empty from '../../components/common/Empty'


const Home = ({ navigation }: any) => {

    // fetch policies
    const { isLoading, error, data } = useQuery({
        queryKey: ['policies'],
        queryFn: ({ queryKey }) => getPolicies(),
        onError(err: any) {
            console.log(err)
            new Alert().error(err?.response?.data?.message || err?.response?.statusText || "An error occured,check your network and try again.")
        },
    })

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
                data={data?.data?.policy}
                ListEmptyComponent={() => <Empty message={isLoading ? 'please hold while we fetch available policies' : 'No policies found, create one now!'} />}
                renderItem={({ item }: any) =>
                    <TouchableRipple style={{ width: "97%", marginHorizontal: 6, marginVertical: 6, }} onPress={() => navigation.navigate("planDetails",{...item})}>
                        <PolicyCard data={item}  />
                    </TouchableRipple>
                }
            />
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({})