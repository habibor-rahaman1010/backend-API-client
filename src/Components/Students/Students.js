import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import UseContextAPI from '../../Hooks/UseContextAPI';

const Students = () => {
    const { LoadAPI } = UseContextAPI();
    const { students } = LoadAPI();
    const allStudent = [];

    return (
        <Container>
            {students.forEach(student => {
                return (
                    allStudent.push(
                        <Col key={student.id}>
                            <Card style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                                <Card.Img variant="top" src={student.image} />
                                <Card.Body>
                                    <Card.Title>{student?.name}</Card.Title>
                                    <Card.Text>
                                        {student.email} <br />
                                        {student.career}
                                    </Card.Text>
                                    <section className='d-flex justify-content-between'>
                                        <Button variant="outline-success">Details Student</Button>
                                    </section>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                )
            })}

            <Row xs={1} md={4} className="g-4 mt-4" >
                {allStudent}
            </Row> <br /> <br />
        </Container>
    );
};

export default Students;