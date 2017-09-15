import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text } from 'native-base';
const mm1 = require('../images/mm1.jpeg');
const mm2 = require('../images/mm2.jpg');
export default class ThumbnailExample extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content contentContainerStyle={{alignItems:'center'}}>
                    <Text>Square Thumbnail</Text>
                    <Thumbnail square source={mm1} />
                    <Thumbnail square small source={mm1} />
                    <Text>Circular Thumbnail</Text>
                    <Thumbnail source={mm2} />
                    <Thumbnail large source={mm2} />
                </Content>
            </Container>
        );
    }
}