import React, {Component} from 'react';
import {Container, Header, Content, Form, Item, Text,Input, Label,Button} from 'native-base';

export default class FloatingLabelExample extends Component {
    render() {
        return (
            <Container>
                <Content style={{backgroundColor: 'white'}}>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username:</Label>
                            <Input autoFocus/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password:</Label>
                            <Input secureTextEntry/>
                        </Item>
                        <Button block style={{margin:15}}><Text>Sign In</Text></Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}