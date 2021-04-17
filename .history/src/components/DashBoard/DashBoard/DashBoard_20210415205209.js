import React from 'react';
import { Row } from 'react-bootstrap';
import Sidebar from './Sidebar/Sidebar';

const DashBoard = () => {
    return (
        <section>
            <Row>
                <Sidebar/>
            </Row>
        </section>
    );
};

export default DashBoard;