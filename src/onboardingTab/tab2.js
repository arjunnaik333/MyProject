import { Table, Switch, Popconfirm } from 'antd';
import React from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import AdvancedSearchForm from '../onboardingTab/tab'








const Demo = (props) => {
  const [savedata, SetSaveData]=useState([])

  

  useEffect(()=>{
    const item= localStorage.getItem('savedata')
    const convItem= JSON.parse(item)
    if(convItem){
      SetSaveData(convItem);
    }
    
    },[])
    
    useEffect(()=>{
      SetSaveData(allDetails)
      const save= JSON.stringify(props.details)
      localStorage.setItem('props.details', save)
      
    }, [props.details])
   


  const columns = [
    {
      title: 'Organization Code',
      width: 120,
      dataIndex: 'OrganizationCode',
      key: 'OrganizationCode',
      fixed: 'left',
    },
    {
      title: 'Organization Name',
      width: 150,
      dataIndex: 'OrganizationName',
      key: 'OrganizationName',
      fixed: 'left',
    },
    {
      title: 'CIN Number',
      dataIndex: 'CINNumber',
      key: 'CINNumber',
      width: 150,
    },
    {
      title: 'GSTIN Number',
      dataIndex: 'GSTINNumber',
      key: 'GSTINNumber',
      width: 150,
    },
    {
      title: 'Domain Name',
      dataIndex: 'DomainName',
      key: 'DomainName',
      width: 150,
    },
    {
      title: 'Address Line 1',
      dataIndex: 'AddressLine1',
      key: 'AddressLine1',
      width: 150,
    },
    {
      title: 'Address Line 2',
      dataIndex: 'AddressLine2',
      key: 'AddressLine2',
      width: 150,
    },
    {
      title: 'Phone',
      dataIndex: 'Phone',
      key: 'Phone',
      width: 150,
    },
    {
      title: 'City',
      dataIndex: 'City',
      key: 'City',
      width: 150,
    },
    {
      title: 'State',
      dataIndex: 'State',
      key: 'State',
      width: 150,
    },
    {
      title: 'PIN Code',
      dataIndex: 'PINCode',
      key: 'PINCode',
      width: 150,
    },
    {
      title: 'Country',
      dataIndex: 'Country',
      key: 'Country',
      width: 150,
    },
    /*{
      title: 'User Role',
      dataIndex: 'UserRole',
      key: 'UserRole',
      width: 150,
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
      width: 150,
    },
    {
      title: 'Email Address',
      dataIndex: 'EmailAddress',
      key: 'EmailAddress',
      width: 150,
    },
    {
      title: 'Phone Number',
      dataIndex: 'PhoneNumber',
      key: 'PhoneNumber',
      width: 150,
    },*/
    {
      title: 'Logo',
      dataIndex: 'uploadimage',
      key: 'uploadimage',
      width: 150,
    },
  
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () =>
            
              <Popconfirm title="Sure to delete?" onConfirm={(key) => handleDelete(key)}>
                <a>Delete</a>
              </Popconfirm>
            
    },
  ];
 
  const handleDelete = (key) => {
    allDetails.filter(item => item.key !== key) }
  
  //const[data, SetData]=useState([])
  
let allDetails =props.details;


console.log('all', savedata)
 const oneDeatils=props.inputData;
 


/*data= [{AddressLine1: "dfbdfbg",
AddressLine2: "bdfbf",
CINNumber: "dfbdfb",
City: "fbdfg",
Country: "vdecd",
DomainName: "dfbfdb",
EmailAddress: "rvrfsd",
GSTINNumber: "dscdsa",
Name: "dvsrdfvc",
OrganizationCode: "3",
OrganizationName: "sdvsfv",
PINCode: "ewdcvd",
Phone: "fbdf",
PhoneNumber: "d",
State: "Andhra Pradesh",
UserRole: "vdsfrdv",
uploadimage: undefined, }, ];*/
 //data.push(oneDeatils);
//const data =[];

 //data.push(oneDeatils)

 console.log( 'in function', props.details)
 console.log( 'in function d')




  
  return (
    <Table
      columns={columns}
      dataSource={savedata}
    
      scroll={{ x: 1500, y: 486 }}
     
      sticky
    />
    
  );
};

export default Demo