import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

import puzzle from '../icons/puzzle.svg';




const roundedPill = {
  borderRadius: "50px",
  padding: "10px 25px 10px 25px",
}

const nav = {
  background: "#F1F5F9",
  width: "80%",
  margin: "0 auto",
  borderRadius: "50px"
}

const backButton = {
  borderRadius: "50px",
  padding: "10px 30px 10px 30px",


}


function Profile() {
  return (

<>
<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>

  <Nav justify variant="pills" style={nav} className="justify-content-center" acti defaultActiveKey="0">
  <Nav.Item >
    <Nav.Link eventKey="1" style={roundedPill}><img src={puzzle} alt="Logo" />Архитектура</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="2" style={roundedPill}>Код</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="3" style={roundedPill}>Документация</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="4" style={roundedPill}>Тестирование</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="5" style={roundedPill}>Настройки</Nav.Link>
  </Nav.Item>
</Nav>


<Button style={backButton} variant="light" type="enter">
  -
</Button>

</div>

</>


  );
}

export default Profile;
