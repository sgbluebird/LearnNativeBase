import React, {Component} from 'react';
import {Container, Header, Content, Form, Item, Input,Button,Text} from 'native-base';

export default class FormExample extends Component {
    render() {
        return (
            <Container>
                <Content style={{backgroundColor:'white'}}>
                    <Form>
                        <Item>
                            <Input placeholder="Username"/>
                        </Item>
                        <Item last>
                            <Input placeholder="Password"/>
                        </Item>
                        <Button block style={{margin:15}}><Text>Sign In</Text></Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}