import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import logo from './Infinity-logo.png'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Homepage.css'
import { Link } from 'react-router-dom'



export default function Homepage() {
  return (
    <div style={{ minHeight: 440 }}>
      <Row xs={1} md={2} className="g-4" style={{ backgroundColor: '#202020', width: '100%' }}>
        <Col>
          <Card style={{ backgroundColor: '#202020', border: 0 }}>
            <Card.Body className='left-body'>
              <Card.Title style={{ color: '#ffdd40' }}>#1 Crypto App in the Middle East</Card.Title>
              <a href='https://expo.dev/@abdelmajed/crypto-frontend-expo/'>
                <Button variant="primary">
                  Launch app
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ marginRight: 0 }}>
          <Card style={{ backgroundColor: '#202020', border: 0 }}>
            <Card.Img src={logo} style={{ width: 400, border: 0 }} />
          </Card>
        </Col>
      </Row>
    </div>
  )
}
