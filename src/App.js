import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'ddd',
  'birthday': '96666',
  'gender': '남',
  'job':'학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'www',
  'birthday': '9622566',
  'gender': '남',
  'job':'복학'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'dasdd',
  'birthday': '961516',
  'gender': '남',
  'job':'교수'
}
]
class App extends Component {
  render() {
    return (
   <div>
      {
        customers.map(c => {
          return (
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          );
        })
      }
   </div>
    );
  }
}

export default App;