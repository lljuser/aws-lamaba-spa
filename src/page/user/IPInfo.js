import React from 'react';
import { Table } from 'antd';
import * as dataService from '../../service/user';

class IPInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false, 
      id: null,
      list: [],
      isLoading: false
    };
  
    this.columns = [
      {
        title: '名称',
        dataIndex: 'key',
      },
      {
        title: '信息',
        dataIndex: 'value',
      },  
    ];

    console.log(props);
  }
  

  componentDidMount() {
    this.showIPInfo();
  } 

  showIPInfo = ()=>{
    this.setState({ isLoading: true });
    dataService.showIP().then((response)=>{  
      this.setState({ isLoading: false });
      if(response && response.success){ 
        const data= [
          { 
            key: "userIP",
            value: response.data.userIP?response.data.userIP:"unknown"
          },
          {
            key: "remoteIP",
            value: response.data.remoteIP?response.data.remoteIP:"unknown"
          },
          {
            key: "apiGatewayIP",
            value: response.data.apiGatewayIP?response.data.apiGatewayIP:"unknown"
          }, 
        ]; 
        
        this.setState({
          list: data
        });
      }
     
    })
  } 

  render() {
    const { list,isLoading } = this.state; 

    return (
      <div> 
        <Table columns={this.columns} dataSource={list} loading={isLoading} rowKey="id" /> 
     </div>
    );
  }
}

 

export default IPInfo