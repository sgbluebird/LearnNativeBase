import React, {Component} from 'react';
import {Container, Header, Content, Icon,Text} from 'native-base';

export default class IconExample extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <Content style={{padding:10}}>
                    <Icon name='home'/>
                    <Text>ios-menu</Text>
                    <Icon name='pie' style={{color:'green'}}/>
                    <Text>ios-menu</Text>
                    <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
                </Content>
            </Container>
        );
    }
}