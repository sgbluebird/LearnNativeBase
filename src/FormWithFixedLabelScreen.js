import React, {Component} from 'react';
import {Container, Header, Content, Form, Item, Text,Input, Label,Button} from 'native-base';

export default class FixedLabelExample extends Component {
    render() {
        return (
            <Container>
                <Content style={{backgroundColor: 'white'}}>
                    <Form>
                        <Item fixedLabel>
                            <Label>Username:</Label>
                            <Input placeholder ="Username" autoFocus/>
                        </Item>
                        <Item fixedLabel last>
                            <Label>Password:</Label>
                            <Input placeholder = "Password" secureTextEntry/>
                        </Item>
                        <Button block style={{margin:15}}><Text>Sign In</Text></Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}