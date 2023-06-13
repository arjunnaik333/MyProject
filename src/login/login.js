import react from "react"
import { Button, Checkbox, Form, Input } from "antd";
import { Row, Col } from 'antd';
import './login.css'
import "antd/dist/antd.css";
import img1 from '../../src/asset/logo.png'
import img2 from '../../src/asset/mobile.png'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Login(){
  const navigate= useNavigate()
  
   

  
    const onFinish = (values) => {
      navigate('/homePage')
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
     /* const home = ()=>{
        navigate('/homePage')
      }
*/
    
      return (
       
            
          <div className="main">
          <div >
              <div id ='logo'className='image'>
             <img id ='logo' alt="image" src={img2}/>
         </div>
         <div id='openingimg' className='image'>
             <img id='openingimg' alt="image" src={img1}/>
         </div>
            <Row>
          <Col id='loginbox' md={{span:8}} >
              
        <Form
          name="basic"
          layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
            <Form.Item >
                <div className="">
            <h1>Sign In.</h1> 
              <h2>Don't have an accout? <a>Sign up.</a></h2>
              
              </div>
            </Form.Item>
            

            
          <Form.Item
            label='Email'
            name="username"
            rules={[{type:'email' , required: true,  message: 'Please input your Email!' }]}
          >
            
              
            <Input id='input' placeholder='Email' />
          </Form.Item>
          
         
          <Form.Item
          label='Password'
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
              
            <Input.Password  id='input' placeholder='Password'/>
          </Form.Item>
    
          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 0, span: 24 }}>
            <div className="forgetpassword">
            <Checkbox className="remembercheck">Remember me</Checkbox>
            <a> Forget password</a>
            </div>
          </Form.Item>
    
          <Form.Item wrapperCol={{ offset: 10, span: 24 }}>
            <Button  type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </Col>
        </Row>
        

        </div>
       
        </div>
      );
    



}


export default Login