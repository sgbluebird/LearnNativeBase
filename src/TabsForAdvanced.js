import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Tab1 from './tabs/tabOne';
import Tab2 from './tabs/tabTwo';
import Tab3 from './tabs/tabThree';
export default class TabsAdvancedExample extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs/>
                <Tabs>
                    <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
                        <Tab1 />
                    </Tab>
                    <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
                        <Tab2 />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
                        <Tab3 />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}