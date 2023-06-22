import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/common/header/Header'
import Colors from '../../themes/Colors'
import ProfileCard from '../../components/profile/profileCard'
import { Title, Caption } from 'react-native-paper'
import useAuthenticationState from '../../states/authentication'

const TermsOfService = ({ navigation }: any) => {

    const user = useAuthenticationState((state: any) => state.authentication.user)


    return (
        <View style={{ backgroundColor: Colors.bg, height: "100%" }}>
            <Header showBack={true} title="Terms of Service" titleColor={Colors.black} bgColor={"transparent"} hasBg={true} />
            <ScrollView style={{ paddingHorizontal: 14 }}>
                <View style={{ marginTop: 10, paddingHorizontal: 5 }}>
                    <View style={{ marginBottom: 10 }}>
                        <Title style={{ marginBottom: 3, fontSize: 14, fontFamily: 'MabryPro' }}>Scope of Coverage:</Title>
                        <Caption style={{ fontFamily: 'MabryPro' }}>The insurance coverage provided is limited to the electronic gadgets specifically listed in the policy document. The policyholder must provide accurate information regarding the electronic gadgets to be covered, including the make, model, and purchase date.</Caption>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Title style={{ marginBottom: 3, fontSize: 14, fontFamily: 'MabryPro' }}>Exclusions:</Title>
                        <Caption style={{ fontFamily: 'MabryPro' }}>The insurance coverage does not apply to any loss or damage resulting from intentional acts, wear and tear, mechanical or electrical breakdowns, or damage caused by natural disasters or war.</Caption>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Title style={{ marginBottom: 3, fontSize: 14, fontFamily: 'MabryPro' }}>Premiums and Payments:</Title>
                        <Caption style={{ fontFamily: 'MabryPro' }}>Premiums are due on the policy effective date and must be paid in full to maintain coverage. Failure to pay the premium may result in the cancellation of the policy. The insurance company may adjust the premium rate based on the policyholder's claims history or changes to the risk profile of the electronic gadgets.</Caption>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Title style={{ marginBottom: 3, fontSize: 14, fontFamily: 'MabryPro' }}>Claims:</Title>
                        <Caption style={{ fontFamily: 'MabryPro' }}>The policyholder must report any loss or damage to the insured electronic gadgets as soon as possible, but no later than 48 hours after discovery. The policyholder must provide documentation to support their claim, including the original purchase receipt, police report, and repair estimate.</Caption>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Title style={{ marginBottom: 3, fontSize: 14, fontFamily: 'MabryPro' }}>Limitation of Liability:</Title>
                        <Caption style={{ fontFamily: 'MabryPro' }}>The maximum liability of the insurance company is limited to the actual cash value of the electronic gadget at the time of loss or damage, less any applicable deductible. The insurance company is not liable for any indirect, consequential, or incidental damages resulting from the loss or damage.</Caption>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Title style={{ marginBottom: 3, fontSize: 14, fontFamily: 'MabryPro' }}>Termination:</Title>
                        <Caption style={{ fontFamily: 'MabryPro' }}>The policyholder may terminate the policy at any time by providing written notice to the insurance company. The insurance company may terminate the policy for non-payment of premium, misrepresentation of information, or other reasons as stated in the policy document.</Caption>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Title style={{ marginBottom: 3, fontSize: 14, fontFamily: 'MabryPro' }}>Governing Law:</Title>
                        <Caption style={{ fontFamily: 'MabryPro' }}>The terms and conditions of the policy are governed by the laws of the jurisdiction where the policy is issued.</Caption>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default TermsOfService

const styles = StyleSheet.create({})