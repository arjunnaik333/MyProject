import { Tabs } from 'antd';
import { useState, useEffect } from 'react/cjs/react.development';
import '../onboarding/onboardingPage.css';
import AdvancedSearchForm from '../onboardingTab/tab'
import Demo from '../onboardingTab/tab2'

const { TabPane } = Tabs;


function callback(key) {
  console.log(key);
}

const Onboarding = () => {
const [allData, SetAllData]=useState([])
const [oneData, SetOneData]=useState()



const oneObject=(newData)=>{
    
  
  SetOneData(newData)
  console.log('one', oneData)
  //return( {data})
    }
  const datatoparent=(data)=>{
    
console.log('onboarding',data)
SetAllData(data)
console.log('all', allData)
//return( {data})
  }
 /* var allData =datatoparent() ;*/
  console.log('all', allData)
    
    return(
        <div id='onboarding'>
  <Tabs defaultActiveKey="1" onChange={callback} >
    <TabPane tab="Organization Details" key="1" >
    <AdvancedSearchForm toChild={datatoparent} inputValue={oneObject}  />
    </TabPane>
    <TabPane tab="View All Oraganization" key="3">
    <Demo details={allData} inputData={oneData} />
    </TabPane>
    
  </Tabs>
  </div>
)};

export default Onboarding