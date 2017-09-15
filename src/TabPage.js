import React, {Component} from 'react';
import {Container, Header, Content, Tab, Tabs} from 'native-base';
import Tab1 from './tabs/tabOne';
import Tab2 from './tabs/tabTwo';
import Tab3 from './tabs/tabThree';

export default class TabsExample extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs/>
                <Tabs initialPage={1} tabBarPosition="bottom">
                    <Tab heading="Tab1">
                        <Tab1/>
                    </Tab>
                    <Tab heading="Tab2">
                        <Tab2/>
                    </Tab>
                    <Tab heading="Tab3">
                        <Tab3/>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}