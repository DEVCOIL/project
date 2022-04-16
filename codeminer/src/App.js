import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Form } from 'react-bootstrap';
import {Routes, Route, Link} from 'react-router-dom';





function App() {
  return (

<>




<div className="wrap" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh' }}>

<Row className="mx-0" style={{width: '400px' }}>


<h2 as={Col}>Войти</h2>

    <Form as={Col} >
  <Form.Group className="mb-3" controlId="formBasicEmail">

    <Form.Control type="email" placeholder="Email" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">

    <Form.Control type="password" placeholder="Пароль" />
  </Form.Group>

<Row className="mx-0">
  <Button as={Col} style={{marginRight: '20px' }} variant="primary" type="enter">
    Войти
  </Button>
  <Button as={Col}  variant="outline-secondary" type="register">
    Зарегистрироваться
  </Button>
  </Row>
</Form>
</Row>
</div>

</>


  );
}

export default App;
