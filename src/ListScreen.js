import React, {Component} from 'react';
import {Container, Header, Content, List, ListItem, Text, Icon, Right, Body} from 'native-base';

export default class ListExample extends Component {
    render() {
        return (
            <Container>
                <Content style={{backgroundColor: 'white'}}>
                    <List>
                        <ListItem>
                            <Text>Simon Mignolet</Text>
                            <Icon name='home'/>
                        </ListItem>
                        <ListItem>
                            <Body>
                            <Text>Nathaniel Clyne</Text>
                            </Body>
                            <Right>
                                <Icon name='home'/>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Dejan Lovren</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
