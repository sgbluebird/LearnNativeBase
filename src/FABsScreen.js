import React, {Component} from 'react';
import {Alert} from 'react-native';
import {Container, Header, View, Button, Icon, Fab} from 'native-base';

export default class FABExample extends Component {
    constructor() {
        super();
        this.state = {
            active: false
        };
    }

    render() {
        return (
            <Container>
                <View style={{flex: 1}}>
                    <Fab
                        active={this.state.active}
                        direction="right"
                        containerStyle={{}}
                        style={{backgroundColor: '#5067FF'}}
                        position="bottomLeft"
                        onPress={() => this.setState({active: !this.state.active})}>
                        <Icon name="share"/>
                        <Button onPress={()=>Alert.alert("logo-whatsapp")} style={{backgroundColor: '#34A34F'}}>
                            <Icon name="logo-whatsapp"/>
                        </Button>
                        <Button onPress={()=>Alert.alert("logo-facebook")} style={{backgroundColor: '#3B5998'}}>
                            <Icon name="logo-facebook"/>
                        </Button>
                        <Button onPress={()=>Alert.alert("mail")}  style={{backgroundColor: '#DD5144'}}>
                            <Icon name="mail"/>
                        </Button>
                    </Fab>
                </View>
            </Container>
        );
    }
}