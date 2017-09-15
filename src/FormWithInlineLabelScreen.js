import React, {Component} from 'react';
import {Container, Header, Content, Form, Item, Text,Input, Label,Button} from 'native-base';

export default class FixedLabelExample extends Component {
    render() {
        return (
            <Container>
                <Content style={{backgroundColor: 'white'}}>
                    <Form>
                        <Item inlineLabel>
                            <Label>Username:</Label>
                            <Input autoFocus/>
                        </Item>
                        <Item inlineLabel last>
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