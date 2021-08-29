import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './LoginPageLayoutStyle.css';

const LoginPageLayout = (props) => {
    return (
        <>
            <div className='auth-screen'>
                {props.head}
                <Container>
                    <Row>
                        <Col sm={5} className='social-login'>
                            {props.left}
                        </Col>
                        <Col sm={7}>
                            {props.right}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default LoginPageLayout
