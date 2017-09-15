import React, { Component } from 'react';
import { Container, Header, Content, List, Icon,ListItem, Body,Text, Separator,Right } from 'native-base';
export default class ListSeparatorExample extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content style={{backgroundColor:'white'}}>
                    <Separator bordered>
                        <Text>FORWARD</Text>
                    </Separator>
                    <ListItem >
                        <Body><Text>Aaron Bennet</Text></Body>
                        <Right>
                            <Icon name = 'arrow-forward'/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Text>Claire Barclay</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Kelso Brittany</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text>MIDFIELD</Text>
                    </Separator>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}