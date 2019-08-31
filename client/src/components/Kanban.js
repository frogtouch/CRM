import React from 'react'
import Board from 'react-trello'
import data from '../components/JSON/NFkanban'


export default class App extends React.Component {
  render() {
    return <Board data={data} 
    style={{backgroundColor: '#3f51b5'}
  }
    
    />
  }
}
