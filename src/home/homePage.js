import SideBar from '../menu/menu'
import { Layout, Menu, Button, Input,Card, Badge } from 'antd';
import { Row, Col } from 'antd';
import {  Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { useNavigate } from "react-router-dom";

import img4 from '../../src/asset/emponboard.png';
import img5 from '../../src/asset/announcement.svg';
import img6 from '../../src/asset/Calendar.svg';
import img7 from '../../src/asset/awards.png';
import img8 from '../../src/asset/rewards.svg';
import img9 from '../../src/asset/Notification.svg';
import img10 from '../../src/asset/hutech.png';

import { Carousel } from 'antd';
import { List, Avatar } from 'antd';

import "antd/dist/antd.css";

import {
  TrophyOutlined,
  BellOutlined,
  UserOutlined,
  ShoppingCartOutlined  
} from '@ant-design/icons';
import img2 from '../../src/asset/logo1.png';
import '../home/home.css';
import React from 'react';


const  { Header, Footer, Sider, Content }=Layout;
function HomePage (){
  const [show, setShow] = React.useState(true);

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        borderRadius:'10px',
      };

    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              Profile
            </a>
          </Menu.Item>
          <Menu.Item icon={<DownOutlined />}>
            <a target="_blank" rel="noopener noreferrer" href='/'>
              Logout
            </a>
          </Menu.Item>
        </Menu>
      );
var date=new Date();
var showDate=date.toDateString();

const navigate1= useNavigate()
const HandleOnboarding = ()=>{
  navigate1('/onboarding')
}
const HandleCalender = ()=>{
  navigate1('/calender')
}
 
    return (
      <Layout className="layout">
    <Header>
      
      
        
      
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['5']}>
     <div id='sidebar'> <SideBar /></div>
        <img id='logoo' alt='image' src={img2} />
        <div id='search'><Input placeholder='Search...' /> </div>
        <div  id='nav'>
        <Button type="link" icon={<BellOutlined />}></Button>
        <Button type="link" icon={<ShoppingCartOutlined />} style={{marginLeft:10}}></Button>
        <Button type="link" icon={<TrophyOutlined />} style={{marginLeft:10}}></Button>
        <Dropdown overlay={menu} >
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
     <Button id='myAccount' icon={<UserOutlined />} /> My Account <DownOutlined />
    </a>
  </Dropdown>
        </div>
      </Menu>
    </Header>
    <div id='support'>
      <img src={img10} style={{height:40 }} />
          <h1>For system support contact your on-site super Admin</h1>
          <span><b>{showDate}</b></span>
      </div>
    <div className='container'>
  <Row id='row1' >
    
        <Col sm={{span:14, offset:2}} l={{span:18, offset:2}} >
          <Col >
      <Content className="row">
       
        <Carousel id='carousal' autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
        
        </Content>
        </Col>
        
        
            
                <Row id='iconrow1'  >
                    
            <Card  id='card' hoverable style={{ width:140, marginTop:30 }} onClick={HandleOnboarding}>
              <img src={img4}/>
             <h2>Onboarding Employee</h2>   
            </Card>
            
           
            <Card id='card' hoverable style={{width:140,  marginTop:30 }}>
            
            <img src={img5} style={{height:70}} />
             <h2>Announcement</h2>   
            </Card>
            
            <Card id='card' hoverable style={{width:140,  marginTop:30 }} onClick={HandleCalender} >
            <img src={img6} style={{height:70}} />
             <h2>Calendar</h2>   
            </Card>
            
            <Card id='card' hoverable style={{width:140, marginTop:30 }}>
            <img src={img7} style={{height:70}} />
             <h2>Awards</h2>   
            </Card>
            
            </Row>
            <Row  id='iconrow2'>
              
            <Card id='card' hoverable style={{width:140, marginTop:30 }}>
            <img src={img8} style={{height:70}} />
             <h2>Rewards</h2>   
            </Card>
            
            <Card id='card' hoverable style={{width:140, marginTop:30 }}>
            <img src={img9} style={{height:70}} />
             <h2>Announcement</h2>   
            </Card>
            
            </Row>
    </Col>
            <Col sm={{span:5, offset:1}}  >
            
        <Card
        hoverable style={{  height:160, marginBottom:35 }}>
    <p> My EL Points</p>
    <p> Points used this month</p>
    <p> Points earned this month</p>
    </Card>
        
        <Card hoverable  >
    <p><b> Approvals</b></p>
    <p> Points used this month</p>
    
    </Card>
    <Card
        hoverable style={{  marginTop:25, marginBottom:29 }}>
    <p><img src={img9} style={{height:17}} /><b> My Active Log.</b></p>
    
    <List>
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<h3>Ant Design, a design language</h3>}
          description="Ant Design, a design language "
        />
      </List.Item>
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<h3>Ant Design, a design language</h3>}
          description="Ant Design, a design language "
        />
      </List.Item>
      
      </List>
    
    </Card>
        </Col>
    
        </Row>
       
            
      
        </div>

        <Footer id='footer'>
            <div  >
            <a > &#169; Copy Right</a>
            <a id='fotcont'>Tearms & Condition</a>
            <a id='fotcont'>Cookie Preferances</a>
            <a id='fotcont'>Contact</a>
            <a></a>
            </div>

        
        </Footer>
      </Layout>
    );
  }


export default HomePage 