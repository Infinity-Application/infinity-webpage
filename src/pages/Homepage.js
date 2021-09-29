import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import logo from './Infinity-logo.png'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Homepage.css'



export default function Homepage() {
    return (
            <Row xs={1} md={2} className="g-4" style={{backgroundColor:'#202020'}}>
              <Col>
                <Card style={{backgroundColor:'#202020'}}>
                  <Card.Body className='left-body'>
                    <Card.Title>#1 Crypto App in the Middle East</Card.Title>
                    <Button variant="primary">Launch app</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{backgroundColor:'#202020'}}>
                  <Card.Img  src={logo} style={{width:400}}/>
                </Card>
              </Col>
          </Row>
    )
}
