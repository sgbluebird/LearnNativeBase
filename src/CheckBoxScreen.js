import React, {Component} from 'react';
import {Alert} from 'react-native';
import {Container, Header, Content, ListItem, CheckBox, Text, Body} from 'native-base';

export default class CheckBoxExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <ListItem>
                        <CheckBox checked={true}/>
                        <Body>
                        <Text>Daily Stand Up</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox onPress={() => Alert.alert("哈哈")} checked={false}/>
                        <Body>
                        <Text>Discussion with Client</Text>
                        </Body>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}