import React, { useState } from 'react';
import { Form, Row, Col, Input, Button, Card, Upload, message, Space  } from 'antd';
import Demo  from '../onboardingTab/tab1'

import '../onboardingTab/tab.css';
import { UploadOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

const AdvancedSearchForm = (e) => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();
  const { Option } = Select;
  const [data, SetData]=useState([])
  const [values, SetValues]=useState('')
 

  console.log('form: ', form);
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    const newData=values;
    e.inputValue(newData)
    const formvalues = [...data, newData] 
    SetData(formvalues)
    e.toChild(formvalues) 
    //SetData([...data,newData])
   // data.push(newData)
   //data.unshift(newData)
   
   // e.toChild(data)
    form.resetFields()
    console.log('data',data)
    console.log('data',newData)

  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
/// upload validation.
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      alert('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  return (
    
    <Form
      form={form}
      layout="vertical"
      name="advanced_search"
      className="ant-advanced-search-form"
      
      onFinish={onFinish}
    
      
    >
      
      <Card title="Organization Details" bordered={false} >
      <Row gutter={24}>
      <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'OrganizationCode'}
            label={'Organization Code'} 
            rules={[
              {
                required: true,
                message: 'Input Organization Code!',
              },
            ]}
          >
            <Input placeholder="Organization Code" />
          </Form.Item>
        </Col>
        <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'OrganizationName'}
            label={'Organization Name'} 
            rules={[
              {
                required: true,
                message: 'Input Organization Name!',
              },
            ]}
          >
            <Input placeholder="Organization Name" />
          </Form.Item>
        </Col>
        <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'CINNumber'}
            label={'CIN Number'} 
            rules={[
              {
                required: true,
                message: 'Input CIN Number!',
              },
            ]}
          >
            <Input placeholder="CIN Number" />
          </Form.Item>
        </Col>
        <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'GSTINNumber'}
            label={'GSTIN Number'} 
            rules={[
              {
                required: true,
                message: 'Input GSTIN Number!',
              },
            ]}
          >
            <Input placeholder="GSTIN Number" />
          </Form.Item>
        </Col>
        <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'DomainName'}
            label={'Domain Name'} 
            rules={[
              {
                required: true,
                message: 'Input Domain Name!',
              },
            ]}
          >
            <Input placeholder="Domain Name" />
          </Form.Item>
        </Col>
        <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'AddressLine1'}
            label={'Address Line 1'} 
            rules={[
              {
                required: true,
                message: 'Input Address Line 1!',
              },
            ]}
          >
            <Input placeholder="Address Line 1" />
          </Form.Item>
        </Col>
        <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'AddressLine2'}
            label={'Address Line 2'} 
            rules={[
              {
                required: true,
                message: 'Input Address Line 2!',
              },
            ]}
          >
            <Input placeholder="Address Line 2" />
          </Form.Item>
        </Col>
        <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'Phone'}
            label={'Phone'} 
            rules={[
              {
                required: true,
                message: 'Input Phone!',
              },
            ]}
          >
            <Input placeholder="Phone" />
          </Form.Item>
        </Col>
        <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'City'}
            label={'City'} 
            rules={[
              {
                required: true,
                message: 'Input City!',
              },
            ]}
          >
            <Input placeholder="City" />
          </Form.Item>
        </Col>
        <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'State'}
            label={'State'} 
            rules={[
              {
                required: true,
                message: 'Input State!',
              },
            ]}
          >
            <Select
    showSearch
    
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >
    <Option value="Andhra Pradesh">Andhra Pradesh</Option>
    <Option value="Arunachal Pradesh">Arunachal Pradesh</Option>
    <Option value="Assam">Assam</Option>
    <Option value="Bihar">Bihar</Option>
    <Option value="Chhattisgarh">Chhattisgarh</Option>
    <Option value="Goa">Goa</Option>
  </Select>
          </Form.Item>
        </Col>
        <Col md={{span:4}} key={Math.random()}>
          <Form.Item
            name={'PINCode'}
            label={'PIN Code'} 
            rules={[
              {
                required: true,
                message: 'Input PIN Code!',
              },
            ]}
          >
            <Input placeholder="PIN Code" />
          </Form.Item>
        </Col>
        <Col  md={{span:4}} key={Math.random()}>
          <Form.Item
            name={'Country'}
            label={'Country'} 
            rules={[
              {
                required: true,
                message: 'Input Country!',
              },
            ]}
          >
            <Input placeholder="Country" />
          </Form.Item>
        </Col>

        
        <Col md={{span:8}} key={Math.random()}>
        <Form.Item
            name={'uploadimage'}
            
           
          >
            <div>
            <Upload {...props} listType="picture-card"  name="avatar"
        
        className="avatar-uploader" beforeUpload={beforeUpload}  accept='JPEG' > + Upload
    
  </Upload>
 
  
  </div>
          </Form.Item>
        </Col>
          </Row>
          </Card>
          <div id='division2'  >
          <Card title="Organization Access. "  >
          <Row gutter={0}>
          <Col md={{span:24}} key={Math.random()}>

            
          <Form.List name="advanced_search" className='ant-space ant-space-horizontal ant-space-align-baseline' >
        
        {(fields, { add, remove }) => (
          
          <>
           
            {fields.map(({ key, name, ...restField }) => (

              <div key={key} style={{ display: 'flex', marginBottom: 8  }} align="baseline" id='tab2'>
                <Form.Item
                  
                  label={'User Role'} 
                  name={[name, 'Role']}
                  rules={[{ required: true, message: 'Missing User Role' }]}
                >
                  <Input placeholder="User Role" />
                </Form.Item>
                <Form.Item 
                 
                  label={'Name'} 
                  name={[name, 'Name']}
                  rules={[{ required: true, message: 'Missing Name' }]}
                >
                  <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                  
                  label={'Email Address'}
                  name={[name, 'Email']}
                  rules={[{ type:'email',required: true, message: 'Missing Email Address' }]}
                >
                  <Input placeholder="Email Address" />
                </Form.Item>
                <Form.Item
                  
                  label={'Phone Number'}
                  name={[name, 'PhoneNumber']}
                  rules={[{ required: true, message: 'Missing Phone Number' }]}
                >
                  <Input placeholder="Phone Number" />
                </Form.Item>

                {fields.length > 1 ? (
                <MinusCircleOutlined onClick={() => remove(name)} />
                ) : null}
              </div>
            ))}
            <Form.Item>
              <Button type="dashed" style={{width:120}} onClick={() => add()} block icon={<PlusOutlined />}>
                Add field
              </Button>
            </Form.Item>
          </>
        )}
        
      </Form.List>
      
          </Col>
        </Row>
       
          </Card>
          </div>
          
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
          
        </Col>
      </Row>
      

    </Form>
  );
};

export default AdvancedSearchForm