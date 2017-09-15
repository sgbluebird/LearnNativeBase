import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Content, Text, Segment} from 'native-base';

export default class SegmentOutsideHeaderExample extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back"/>
                        </Button>
                    </Left>
                    <Body>
                    <Segment>
                        <Button first><Text>Puppies</Text></Button>
                        <Button last active><Text>Cubs</Text></Button>
                    </Segment>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="search"/>
                        </Button>
                    </Right>
                </Header>
                <Text>===============SegmentOutside=========</Text>
                <Segment>
                    <Button first>
                        <Text>Puppies</Text>
                    </Button>
                    <Button>
                        <Text>Kittens</Text>
                    </Button>
                    <Button last active>
                        <Text>Cubs</Text>
                    </Button>
                </Segment>
                <Content padder>
                    <Text>Awesome segment</Text>
                </Content>
            </Container>
        );
    }
}