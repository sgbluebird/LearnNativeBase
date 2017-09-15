import React, {Component} from 'react';
import {
    View,
    ScrollView
} from 'react-native';

import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';

export default class AnatomyExample extends Component {
    static navigationOptions = {
        title: '主页',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Header</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <ScrollView>
                        <View>
                            <Button block onPress={() => navigate('ActionSheetPage')}>
                                <Text>
                                    ActionSheet
                                </Text>
                            </Button>
                            <View>
                                <Text>
                                    Welcome to React Native!
                                </Text>
                            </View>
                            <Button block onPress={() => navigate('BadgePage')}>
                                <Text>
                                    Badge
                                </Text>
                            </Button>
                            <Button block onPress={() => navigate('ButtonPage')}>
                                <Text>
                                    Button
                                </Text>
                            </Button>
                            <Button bordered onPress={() => navigate('CardPage')}>
                                <Text>
                                    Card
                                </Text>
                            </Button>
                            <Button bordered onPress={() => navigate('CheckBoxPage')}>
                                <Text>
                                    CheckBox
                                </Text>
                            </Button>
                            <Button onPress={() => navigate('DeckSwiperPage')}>
                                <Text>
                                    DeckSwiper
                                </Text>
                            </Button>
                            <Button onPress={() => navigate('FABsPage')}>
                                <Text>
                                    FABS
                                </Text>
                            </Button>
                            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Button onPress={() => navigate('FooterTabsPage')} style={{margin: 5}}>
                                    <Text>
                                        FooterTabs
                                    </Text>
                                </Button>
                                <Button onPress={() => navigate('FooterTabsWithIconsPage')} style={{margin: 5}}>
                                    <Text>
                                        FooterTabsWithIcons
                                    </Text>
                                </Button>
                                <Button onPress={() => navigate('FooterTabsWithIconsAndTextScreenPage')}
                                        style={{margin: 5}}>
                                    <Text>
                                        FooterTabsWithIconsAndTextScreen
                                    </Text>
                                </Button>
                                <Button onPress={() => navigate('FooterTabsWithBadgeScreenPage')} style={{margin: 5}}>
                                    <Text>
                                        FooterTabsWithBadgeScreen
                                    </Text>
                                </Button>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Button onPress={() => navigate('FormScreenPage')} style={{margin: 5}}>
                                    <Text>
                                        Form
                                    </Text>
                                </Button>
                                <Button onPress={() => navigate('FormWithFixedLabelScreenPage')} style={{margin: 5}}>
                                    <Text>
                                        FormWithFixedLabelScreen
                                    </Text>
                                </Button>
                                <Button onPress={() => navigate('FormWithInlineLabelScreenPage')} style={{margin: 5}}>
                                    <Text>
                                        FormWithInlineLabelScreen
                                    </Text>
                                </Button>
                                <Button onPress={() => navigate('FormWithFloatingLabelScreenPage')} style={{margin: 5}}>
                                    <Text>
                                        FormWithFloatingLabelScreenPage
                                    </Text>
                                </Button>
                                <Button onPress={() => navigate('FormWithRegularTextboxScreen')} style={{margin: 5}}>
                                    <Text>
                                        FormWithRegularTextboxScreen
                                    </Text>
                                </Button>
                            </View>
                            <Button onPress={() => navigate('HeaderScreen')} style={{margin: 5}}>
                                <Text>
                                    HeaderScreen
                                </Text>
                            </Button>

                            <Button onPress={() => navigate('IconScreen')} style={{margin: 5}}>
                                <Text>
                                    IconScreen
                                </Text>
                            </Button>

                            <Button onPress={() => navigate('LayoutScreen')} style={{margin: 5}}>
                                <Text>
                                    LayoutScreen
                                </Text>
                            </Button>

                            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Button onPress={() => navigate('ListScreen')} style={{margin: 5}}>
                                    <Text>
                                        List
                                    </Text>
                                </Button>
                                <Button onPress={() => navigate('ListDividerScreen')} style={{margin: 5}}>
                                    <Text>
                                        ListDividerScreen
                                    </Text>
                                </Button>
                                <Button onPress={() => navigate('ListIcon')} style={{margin: 5}}>
                                    <Text>
                                        ListIcon
                                    </Text>
                                </Button>
                                <Button onPress={() => navigate('ListAvatar')} style={{margin: 5}}>
                                    <Text>
                                        ListAvatar
                                    </Text>
                                </Button>
                                <Button onPress={() => navigate('ListSeparator')} style={{margin: 5}}>
                                    <Text>
                                        ListSeparator
                                    </Text>
                                </Button>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Button onPress={() => navigate('Picker')} style={{margin: 5}}>
                                    <Text>
                                        Picker
                                    </Text>
                                </Button>
                            </View>

                            <Button onPress={() => navigate('SearchBar')} style={{margin: 5}}>
                                <Text>
                                    Search Bar
                                </Text>
                            </Button>

                            <Button onPress={() => navigate('Segment')} style={{margin: 5}}>
                                <Text>
                                    Segment
                                </Text>
                            </Button>
                            <Button onPress={() => navigate('Spinner')} style={{margin: 5}}>
                                <Text>
                                    Spinner
                                </Text>
                            </Button>
                            <Button onPress={() => navigate('SwipableList')} style={{margin: 5}}>
                                <Text>
                                    SwipableList
                                </Text>
                            </Button>
                            <Button onPress={() => navigate('TabPage')} style={{margin: 5}}>
                                <Text>
                                    Tabs
                                </Text>
                            </Button>
                            <Button onPress={() => navigate('TabsForAdvanced')} style={{margin: 5}}>
                                <Text>
                                    TabsForAdvanced
                                </Text>
                            </Button>
                            <Button onPress={() => navigate('TasForScrollable')} style={{margin: 5}}>
                                <Text>
                                    TasForScrollable
                                </Text>
                            </Button>
                            <Button onPress={() => navigate('ThumbnailPage')} style={{margin: 5}}>
                                <Text>
                                    Thumbnail
                                </Text>
                            </Button>
                            <Button onPress={() => navigate('ToastPage')} style={{margin: 5}}>
                                <Text>
                                    ToastPage
                                </Text>
                            </Button>
                        </View>
                    </ScrollView>

                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}