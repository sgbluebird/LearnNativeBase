import React, { Component } from 'react';
import { Container, Header, Content, Toast, Button, Text, Icon,H1,H2,H3 } from 'native-base';
export default class ToastExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        }
    }
    render() {
        return (
            <Container>
                <Header />
                <Content padder>
                    <H1>HAFFFFFFFF</H1>
                    <Button block onPress={()=> Toast.show({
                        text: '密码错误，请重新输入!',
                        position: 'top',
                        type:'danger',
                        buttonText: '确定'
                    })}>
                        <Text>danger</Text>
                    </Button>
                    <H2>HAFFFFFFFF</H2>
                    <Button block onPress={()=> Toast.show({
                        text: '密码错误，请重新输入!',
                        position: 'bottom',
                        type:'success',
                        buttonText: '确定'
                    })}>
                        <Text>success</Text>
                    </Button>
                    <H3>HAFFFFFFFF</H3>
                    <Button bordered block={true} onPress={()=> Toast.show({
                        text: '密码错误，请重新输入!',
                        position: 'bottom',
                        type:'warning',
                        buttonText: '确定',
                        duration:1000
                    })}>
                        <Text>warning</Text>
                    </Button>

                </Content>
            </Container>
        );
    }
}