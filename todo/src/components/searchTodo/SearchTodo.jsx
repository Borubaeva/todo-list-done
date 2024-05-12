

import React, { Component } from 'react'

// state = {
//   filterText:""
// }

// setFilter = (filter) => {
//   this.setState({ filter });
//   console.log(filter);
// };

export default class SearchTodo extends Component {
  render() {
    return (
      <div className='d-flex'>
        <input type="text "className='form-control' />
        <button className='btn btn-outline-info'>All</button>
        <button className='btn btn-outline-secondary' onClick={()=> this.props.searchData(this.state.filter)}>Active</button>
        <button className='btn btn-outline-secondary'>Done</button>

      </div>
    )
  }
}



// import React, { Component } from 'react';

// export default class SearchTodo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filter: 'all', 
//     };
//   }

  // setFilter = (filter) => {
  //   this.setState({ filter });
  //   console.log(filter);
  // };

//   render() {
//     return (
//       <div className='d-flex'>
//         <input type="text" className='form-control' />
//         <button className='btn btn-outline-info' onClick={() => this.setFilter('all')}>All</button>
//         <button className='btn btn-outline-secondary' onClick={() => this.setFilter('active')}>Active</button>
//         <button className='btn btn-outline-secondary' onClick={() => this.setFilter('done')}>Done</button>
//       </div>
//     );
//   }
// }
