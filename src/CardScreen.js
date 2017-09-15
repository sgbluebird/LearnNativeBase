import React, {Component} from 'react';
import {Image} from 'react-native';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Button,
    Thumbnail,
    Text,
    Body,
    Icon,
    Right,
    Left
} from 'native-base';

const mm1 = require('../images/mm1.jpeg');
const mm2 = require('../images/mm2.jpg');
export default class CardHeaderFooterExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>Header</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                BodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBody
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>Footer</Text>
                        </CardItem>
                    </Card>
                    <Text>Card List</Text>
                    <Card>
                        <CardItem>
                            <Left>
                                <Icon active name="logo-googleplus"/>
                                <Text>Google Plus</Text>
                            </Left>

                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </CardItem>
                    </Card>
                    <Text>Card Image</Text>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={mm1}/>
                                <Body>
                                <Text>NativeBase</Text>
                                <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={mm2} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up"/>
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                            <Button transparent>
                                <Icon active name="chatbubbles"/>
                                <Text>4 Comments</Text>
                            </Button>
                            </Body>
                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <Text>Card Showcase</Text>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={mm1}/>
                                <Body>
                                <Text>NativeBase</Text>
                                <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Image source={mm2} style={{height: 200, width: 200, flex: 1}}/>
                            <Text>
                                asfdfasdfasdfsadfasdfsdfsdfasdfsadfsd
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="logo-github"/>
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}