import { useState } from "react";
import "./App.css";
import { Button, Form, Row, Col, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

function App() {
  const [text, settext] = useState("");
  const [showtext, setShowtext] = useState({fname:'',lname:'',msg:''});
  const [password, setPassword] = useState("");
  const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/JSON' },
        body: JSON.stringify({ username: text, password:password})
    };
    
  const fetch_data= async() => {
    
      let formData = new FormData();    

      formData.append('username', text);   
      formData.append('password', password);

      const config = {     
          headers: { 'content-type': 'multipart/form-data'}
  }

axios.post("http://localhost/php_testing/index.php", formData, config, requestOptions)
    .then(response => {
      console.log(response['data']['msg'])
        setShowtext({fname:response['data']['fname'],lname:response['data']['lname'],msg:response['data']['msg']})
    }).catch(error => {
        console.log(error);
    });

  }
  return (
  <Container style={{backgroundColor: "#FEF5ED"}}>
  <Row>
    <Col>
      <div className="left" style={{padding:"30px", margin:"70px"}}>
      <Form>
          <Form.Group style={{fontSize:"30px"}}>
            <Form.Label>Username</Form.Label>
            <Form.Control style={{fontSize:"15px", width:"50%"}} type="text" placeholder="Username" name="username"
             onChange={(key1)=>{
              settext(key1.target.value)
            }}/>

            <Form.Label>Password</Form.Label>
            <Form.Control style={{fontSize:"15px", width:"50%"}} type="text" placeholder="Password" name="password" 
            onChange={(key1)=>{
              setPassword(key1.target.value)
            }}/>
          </Form.Group>
      </Form>

        <br />
        <Button onClick={() => {
            fetch_data()}} 
            className="btn btn-lg btn-secondary">Submit</Button>
      </div>
      </Col>
      <Col>
      <div className="right" style={{padding:"30px", margin:"70px"}}>
      {
        showtext.msg=='success' && <div> 
                <h1>{showtext.fname}</h1>
                <h1>{showtext.lname}</h1>
                </div>
      }
      {
        showtext.msg=='' && <h1></h1>
      }
      {
        showtext.msg=='fail' && <h1>User not found</h1>
      }
      </div>
    </Col>
    </Row>
</Container>
  );
}

export default App;

