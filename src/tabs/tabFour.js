import React, {Component} from 'react';
import {Image,Alert} from 'react-native';
import {Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Button} from 'native-base';

export default class ListAvatarExample extends Component {
    render() {
        return (
            <Container>
                <Content style={{backgroundColor: 'white'}}>
                    <List>
                        <ListItem avatar onPress={()=>Alert.alert('Title','Messagesdfsdfasdfasdfsdfsd')}>
                            <Left>
                                <Thumbnail source={require('../../images/mm1.jpeg')}/>
                            </Left>
                            <Body>
                            <Text>Kumar Pratik</Text>
                            <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={require('../../images/mm1.jpeg')}/>
                            </Left>
                            <Body>
                            <Text>Kumar Pratik</Text>
                            <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={require('../../images/mm1.jpeg')}/>
                            </Left>
                            <Body>
                            <Text>Kumar Pratik</Text>
                            <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={require('../../images/mm2.jpg')}/>
                            </Left>
                            <Body>
                            <Text>Kumar Pratik</Text>
                            <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <Thumbnail square size={80} source={require('../../images/mm2.jpg')} />
                            <Body>
                            <Text>Sankhadeep</Text>
                            <Text note>Its time to build a diff</Text>
                            </Body>
                            <Right>
                                <Button transparent={true}>
                                    <Text STYLE={{alignItems:'center'}}>
                                        详情
                                    </Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
