import React, {Component} from 'react';
import {Container, Header, Item, Input, Icon, Button, Text,Body} from 'native-base';

export default class SearchBarExample extends Component {
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search"/>
                        <Input placeholder="Search"/>
                        <Icon name="ios-people"/>
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>

            <Button block   onPress={()=>this.props.navigation.navigate('MainPage')}>
                <Text>返回</Text>
            </Button>

            </Container>
        );
    }
}