import './Grid.css';
import React from 'react';
import './Row'
import MaterialTable from 'material-table';

class Grid extends React.Component {
  requestObj;
  apiUrl = 'http://reddivestorapi.us-west-2.elasticbeanstalk.com/cryptocounts/get'
  coinMarketCapUrl = 'https://coinmarketcap.com/currencies/COIN/'
  bearerToken = process.env.REACT_APP_BEARER_TOKEN

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      timeBucket: "lastday"
    };

    this.requestObj = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + this.bearerToken
      },
    }

  }


  componentDidMount() {
    fetch((this.apiUrl + this.state.timeBucket), this.requestObj)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  
  
  render() {
    const { error, isLoaded, items, timeBucket} = this.state;
    const columns = [
      { title: '#', field: 'rank'},
      { title: 'Name (click for more info)', field: 'name', render: rowData => {
        return(<p><a id='coinMarketLink' target ="_blank" href = {this.coinMarketCapUrl.replace('COIN', (rowData.name).replaceAll(' ', '-').replaceAll('.','-'))}>{rowData.name}</a></p>)
      }},
      { title: 'Today\'s Reddit Mentions', field: 'coinFrequency', render: rowData => {
        return (rowData.coinFrequency > 100 ? <p>{rowData.coinFrequency + ' 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥'}</p> : (rowData.coinFrequency > 60 ? <p>{rowData.coinFrequency + ' 🔥🔥🔥🔥🔥🔥🔥'}</p> : (rowData.coinFrequency > 20 ? <p>{rowData.coinFrequency + ' 🔥🔥🔥🔥'}</p> : (rowData.coinFrequency >10 ? <p>{rowData.coinFrequency + ' 🔥🔥'}</p> : (rowData.coinFrequency > 5 ? <p>{rowData.coinFrequency + ' 🔥'}</p> : <p>{rowData.coinFrequency + ' ❄️'}</p>)))))}}];        
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <div className="content-container">
            <MaterialTable 
              columns={columns} 
              data={items} 
              options={{
                paging: false,
                toolbar:false,
                maxBodyWidth:'50%',
                headerStyle: { 
                  top: 0,
                  fontSize:'15px',
                  backgroundColor:'#191919',
                  color: '#e5e5e5'
                },
                cellStyle: {
                  color: '#e5e5e5',
                  backgroundColor:'#191919',
                  fontSize: '25px'

                }
                }} 
              />
          </div>
      );
    }
  }

}


export default Grid;
