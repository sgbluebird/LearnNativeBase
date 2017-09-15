import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Button,Text, Icon, Title,Subtitle} from 'native-base';

export default class HeaderExample extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => navigate('MainPage')}>
                            < Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>HeaderDemo</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Right>
                </Header>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Header</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Text>Cancel</Text>
                        </Button>
                    </Right>
                </Header>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Title</Title>
                    <Subtitle>Subtitle</Subtitle>
                    </Body>
                    <Right/>
                </Header>
            </Container>
        );

    }
}