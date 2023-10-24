import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import WideButtonComponent from '../WideButtonComponent/WideButtonComponent';

type CustomModalComponentProps = {
    userEmail:string;
    isVisible: boolean;
    onClose: () => void;
    onLogout: () => void;
}
const CustomModalComponent: React.FC<CustomModalComponentProps> = ({ isVisible, onClose, onLogout,userEmail }) => {
    return (
        <Modal isVisible={isVisible}>
            <View style={styles.container}>
                <Text style={styles.main_header_text}>Hey {userEmail}, Do you want to logout?</Text>
                <View style={styles.button_container}>
                <WideButtonComponent backgroundColor={'#00CCBB'} icon={undefined} buttonText={'Yes'} buttonTextColor='#fff'
                    onpressFucntion={onLogout} />
                <WideButtonComponent backgroundColor={'#00CCBB'} icon={undefined} buttonText={'Cancel'} buttonTextColor='#fff'
                    onpressFucntion={onClose} />
                    </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius:6
    },
    main_header_text: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        textAlign:"center"
    },
    button_container:{
        marginTop:20
    }
})

export default CustomModalComponent;;
