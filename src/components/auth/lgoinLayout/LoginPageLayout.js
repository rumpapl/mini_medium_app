import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import './LoginPageLayoutStyle.css';

const LoginPageLayout = (props) => {
    return (
        <>
            {props.head}
            <Container>
                <Row>
                    <Col sm={8}>
                        {props.left}
                    </Col>
                    <Col sm={4}>
                        {props.right}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LoginPageLayout
