import React, { Component } from 'react';
import { Container, Header, Tab, Tabs,ScrollableTab } from 'native-base';
import Tab1 from './tabs/tabOne';
import Tab2 from './tabs/tabTwo';
import Tab3 from './tabs/tabThree';
import Tab4 from './tabs/tabFour';
import Tab5 from './tabs/tabFive';
export default class TabsScrollableExample extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs/>
                <Tabs renderTabBar={()=> <ScrollableTab />}>
                    <Tab heading="Tab1">
                        <Tab1 />
                    </Tab>
                    <Tab heading="Tab2">
                        <Tab2 />
                    </Tab>
                    <Tab heading="Tab3">
                        <Tab3 />
                    </Tab>
                    <Tab heading="Tab4">
                        <Tab4 />
                    </Tab>
                    <Tab heading="Tab5">
                        <Tab5 />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}