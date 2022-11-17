import _ from 'lodash'

const data = [
  {
    username: 'Amparo',
    role: 'admin'
  },
  {
    username: 'Sergio',
    role: 'seller'
  },
  {
    username: 'Florence',
    role: 'seller'
  },
  {
    username: 'Natasha',
    role: 'customer'
  }
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta)



