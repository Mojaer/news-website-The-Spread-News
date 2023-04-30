import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNavbar from '../Pages/Shared/LeftNavbar/LeftNavbar';
import RightNavbar from '../Pages/Shared/RightNavbar/RightNavbar';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>

            <Container>

                <Row>

                    <Col lg={9}><Outlet></Outlet></Col>
                    <Col lg={3}><RightNavbar></RightNavbar></Col>
                </Row>
            </Container>

            <Footer></Footer>

        </div>
    );
};

export default NewsLayout;