import React, {Component} from 'react';
import {Container, Header, Content, Button, Icon,Text} from 'native-base';

export default class ButtonThemeExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Button light><Text> Light </Text></Button>
                    <Button primary><Text> Primary </Text></Button>
                    <Button success><Text> Success </Text></Button>
                    <Button info><Text> Info </Text></Button>
                    <Button warning><Text> Warning </Text></Button>
                    <Button danger><Text> Danger </Text></Button>
                    <Button dark><Text> Dark </Text></Button>
                    <Text>======Transparent=======</Text>
                    <Button transparent light>
                        <Text>Light</Text>
                    </Button>
                    <Button transparent>
                        <Text>Primary</Text>
                    </Button>
                    <Button transparent success>
                        <Text>Success</Text>
                    </Button>
                    <Button transparent info>
                        <Text>Info</Text>
                    </Button>
                    <Button transparent warning>
                        <Text>Warning</Text>
                    </Button>
                    <Button transparent danger>
                        <Text>Danger</Text>
                    </Button>
                    <Button transparent dark>
                        <Text>Dark</Text>
                    </Button>
                    <Text>======Outline=======</Text>
                    <Button bordered light>
                        <Text>Light</Text>
                    </Button>
                    <Button bordered>
                        <Text>Primary</Text>
                    </Button>
                    <Button bordered success>
                        <Text>Success</Text>
                    </Button>
                    <Button bordered info>
                        <Text>Info</Text>
                    </Button>
                    <Button bordered warning>
                        <Text>Warning</Text>
                    </Button>
                    <Button bordered danger>
                        <Text>Danger</Text>
                    </Button>
                    <Button bordered dark>
                        <Text>Dark</Text>
                    </Button>
                    <Text>======Rounded=======</Text>
                    <Button rounded light>
                        <Text>Light</Text>
                    </Button>
                    <Button rounded>
                        <Text>Primary</Text>
                    </Button>
                    <Button rounded success>
                        <Text>Success</Text>
                    </Button>
                    <Button rounded info>
                        <Text>Info</Text>
                    </Button>
                    <Button rounded warning>
                        <Text>Warning</Text>
                    </Button>
                    <Button rounded danger>
                        <Text>Danger</Text>
                    </Button>
                    <Button rounded dark>
                        <Text>Dark</Text>
                    </Button>
                    <Text>======Block=======</Text>
                    <Button block light>
                        <Text>Light</Text>
                    </Button>
                    <Button block>
                        <Text>Primary</Text>
                    </Button>
                    <Button block success>
                        <Text>Success</Text>
                    </Button>
                    <Button block info>
                        <Text>Info</Text>
                    </Button>
                    <Button block warning>
                        <Text>Warning</Text>
                    </Button>
                    <Button block danger>
                        <Text>Danger</Text>
                    </Button>
                    <Button block dark>
                        <Text>Dark</Text>
                    </Button>
                    <Text>======Full=======</Text>
                    <Button full light>
                        <Text>Light</Text>
                    </Button>
                    <Button full>
                        <Text>Primary</Text>
                    </Button>
                    <Button full success>
                        <Text>Success</Text>
                    </Button>
                    <Button full info>
                        <Text>Info</Text>
                    </Button>
                    <Button full warning>
                        <Text>Warning</Text>
                    </Button>
                    <Button full danger>
                        <Text>Danger</Text>
                    </Button>
                    <Button full dark>
                        <Text>Dark</Text>
                    </Button>
                    <Text>======Icon=======</Text>
                    <Button iconLeft light block>
                        <Icon name='arrow-back' />
                        <Text>Back</Text>
                    </Button>
                    <Button iconRight light full>
                        <Text>Next</Text>
                        <Icon name='arrow-forward' />
                    </Button>
                    <Button iconLeft block>
                        <Icon name='home' />
                        <Text>Home</Text>
                    </Button>
                    <Button iconLeft transparent primary>
                        <Icon name='beer' />
                        <Text>Pub</Text>
                    </Button>
                    <Button iconLeft dark bordered>
                        <Icon name='cog' />
                        <Text>Settings</Text>
                    </Button>
                    <Text>======Size=======</Text>
                    <Button small primary>
                        <Text>Default Small</Text>
                    </Button>
                    <Button success>
                        <Text>Success Default</Text>
                    </Button>
                    {/*//Large size button*/}
                    <Button large dark>
                        <Text>Dark Large</Text>
                    </Button>
                    <Text>======Disabled=======</Text>
                    <Button disabled><Text>Default</Text></Button>
                    <Button disabled bordered><Text>Bordered</Text></Button>
                    <Button disabled rounded><Text>Rounded</Text></Button>
                    <Button disabled large><Text>Large</Text></Button>
                    <Button disabled iconRight>
                        <Text>Icon Button</Text>
                        <Icon name="home" />
                    </Button>
                    <Button disabled block><Text>Block</Text></Button>
                    <Button disabled full><Text>Full</Text></Button>
                </Content>
            </Container>
        );
    }
}