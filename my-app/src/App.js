import { useState } from "react";
import "./App.css";
import { Button, Form, Row, Col, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [text, settext] = useState("");
  const [showtext, setShowtext] = useState([]);
  
  return (
  <Container style={{backgroundColor: "#FEF5ED"}}>
  <Row>
    <Col>
      <div className="left" style={{padding:"30px", margin:"70px"}}>
      <Form>
          <Form.Group style={{fontSize:"40px"}}>
            <Form.Label>First Name</Form.Label>
            <Form.Control style={{fontSize:"15px", width:"50%"}} type="text" placeholder="First Name" onChange={(e) => {settext(e.target.value); }}/>
          </Form.Group>
      </Form>
        <br />
        <Button onClick={() => {
            setShowtext(showtext.concat(text));}} 
            className="btn btn-lg btn-secondary">Submit</Button>
      </div>
      </Col>
      <Col>
      <div className="right" style={{padding:"30px", margin:"70px"}}>
      <div>
        {showtext.map((e) => {
          return <h1>{e}</h1>
        })}
        </div>
        <Button type="button" onClick={() => { setShowtext([]);}} style={{alignItem:"center"}} className="btn btn-lg btn-secondary">Clear</Button>
      </div>
    </Col>
    </Row>
</Container>
  );
}

export default App;

