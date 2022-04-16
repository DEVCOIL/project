import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Form } from 'react-bootstrap';





function Register() {
  return (

<>





<div className="wrap" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh' }}>

<Row className="mx-0" style={{width: '400px' }}>


<h2 as={Col}>Зарегистрироваться</h2>

    <Form as={Col} >
  <Form.Group className="mb-3" controlId="formBasicEmail">

    <Form.Control type="email" placeholder="Email" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">

    <Form.Control type="password" placeholder="Пароль" />
  </Form.Group>

<Row className="mx-0">
  <Button as={Col} variant="primary" type="enter">
   Зарегистрироваться
  </Button>
  <Button as={Col} style={{marginLeft: '20px' }} variant="outline-secondary" type="register">
   Войти
  </Button>
  </Row>
</Form>
</Row>
</div>

</>


  );
}

export default Register;
