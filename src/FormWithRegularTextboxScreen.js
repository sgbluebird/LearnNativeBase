import React, {Component} from 'react';
import {Container, Header, Content, Input, Item,Icon,Text} from 'native-base';

export default class RegularTextboxExample extends Component {
    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>
                <Content>
                    <Text>regular</Text>
                    <Item regular>
                        <Input placeholder='Regular Textbox'/>
                    </Item>
                    <Text>underline</Text>
                    <Item underline>
                        <Input placeholder='underline Textbox'/>
                    </Item>
                    <Text>rounded</Text>
                    <Item rounded>
                        <Input placeholder='rounded Textbox'/>
                    </Item>
                    <Text>Icon</Text>
                    {/*// Text input box with icon aligned to the left*/}
                    <Item regular style={{margin:10}}>
                        <Icon active name='home' />
                        <Input placeholder='Icon Textbox'/>
                    </Item>
                    {/*// Text input box with icon aligned to the right*/}
                    <Item regular style={{margin:10}}>
                        <Input placeholder='Icon Alignment in Textbox'/>
                        <Icon active name='swap' />
                    </Item>
                    <Text>Success</Text>
                    <Item success={true} regular>
                        <Input placeholder='Textbox with Success Input'/>
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Text>Error</Text>
                    <Item error regular >
                        <Input style={{height:210}} multiline placeholder='Textbox with Error Input'/>
                        <Icon name='close-circle' />
                    </Item>
                    <Text>Disabled</Text>
                    <Item disabled regular>
                        <Input disabled placeholder='Disabled Textbox'/>
                        <Icon name='information-circle' />
                    </Item>
                </Content>
            </Container>
        );
    }
}