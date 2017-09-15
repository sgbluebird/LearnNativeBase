import React, {Component} from 'react';
import {View, Alert} from 'react-native'
import {Container, Button, Header, Content, List,Badge, ListItem, Text, Icon, Left, Body, Right, Switch} from 'native-base';

export default class ListIconExample extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => navigate('MainPage')} >
                            <Icon name='arrow-back' style={{marginRight: 5}}/>
                            <Text>
                                返回
                            </Text>

                        </Button>
                    </Left>
                </Header>
                <Content style={{backgroundColor: 'white'}}>
                    <List>
                        <ListItem icon>
                            <Left>
                                <Icon name="plane"/>
                            </Left>
                            <Body>
                            <Text>Airplane Mode</Text>
                            </Body>
                            <Right>
                                <Switch value={true}/>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="wifi"/>
                            </Left>
                            <Body>
                            <Text>Wi-Fi</Text>
                            </Body>
                            <Right>
                                <Text>GeekyAnts</Text>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="bluetooth"/>
                            </Left>
                            <Body>
                            <Text>Bluetooth</Text>
                            </Body>
                            <Right>
                                <Text>On</Text>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="bluetooth"/>
                            </Left>
                            <Body>
                            <Text>Bluetooth</Text>
                            </Body>
                            <Right>
                                <Badge>
                                    <Text>2</Text>
                                </Badge>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
