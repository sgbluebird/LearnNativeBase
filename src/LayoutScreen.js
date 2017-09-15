import React, {Component} from 'react';
import {Container, Header, Content,Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

export default class LayoutExample extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <Content>
                    <Grid>
                        <Row>
                            <Col style={{backgroundColor: '#635DB7', }}>
                                <Text>Hahaa</Text>
                            </Col>
                            <Col style={{backgroundColor: '#00CE9F', }}>
                                <Text>Gegegege</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{backgroundColor: '#52b720',}}></Col>
                            <Col style={{backgroundColor: '#ce5363',}}></Col>
                        </Row>
                        <Row>
                            <Col style={{backgroundColor: '#a1b738', }}></Col>
                            <Col style={{backgroundColor: '#1b1ece', }}></Col>
                        </Row>
                        <Row>
                            <Col style={{backgroundColor: '#635DB7', }}></Col>
                            <Col style={{backgroundColor: '#00CE9F', }}></Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}