import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Person from '../components/Persons/Person/Person';


class App extends Component {
  // initializing state  
  state = {
    persons: [
      {
        name: 'Akram',
        age: "26",
        id: 1
      },
      {
        name: 'Akash',
        age: 25,
        id: 2
      }, {
        name: 'Preetam',
        age: 27,
        id: 3
      }
    ],
    show: false,
    counter: 0
  }
  

  changeNameEvent = (newName) => {
    this.setState({
      persons:
        [
          {
            name: 'Akram',
            age: 26,
            id: 1
          },
          {
            name: 'Akash',
            age: 25,
            id: 2
          }, {
            name: newName,
            age: 27,
            id: 3
          }
        ]
    })
  }

  changeNameFromUI = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const newPerson = { ...this.state.persons[personIndex] }
    newPerson.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = newPerson;
    console.log("persons", persons);
    this.setState((previousState,props)=>
    {
     return{ persons: persons,
      counter: previousState.counter+1}
    })
    // this.setState({
    //   persons: persons,
    //   counter: this.state.counter+1
    // })
  }

  toggleShow = () => {
    const showThat = this.state.show;
    this.setState({ show: !showThat });
  }

  deletePerson = (id) => {
    const newPerson = this.state.persons.filter(x => {
      return x.id !== id;
    });
    this.setState({ persons: newPerson })

  }
  render() {
   
    let personRender = null;
    if (this.state.show) { 
      personRender = (
        <Person
          changeNameFromUI={this.changeNameFromUI}
          persons={this.state.persons}
          deletePerson={this.deletePerson}
        />
      )
    }
 
    return (
      <div>
        <Cockpit toggleShow={this.toggleShow} persons={this.state.persons} show={this.state.show} />
        {personRender}
      </div>
    )
  }
}
// const App =  (props) =>  {
  
//   const [personState, setpersonState] = useState({
//     persons: [
//       {
//         name: 'Akram',
//         age: 26,
//         id: 1
//       },
//       {
//         name: 'Akash',
//         age: 25,
//         id: 2
//       }, {
//         name: 'Preetam',
//         age: 27,
//         id: 3
//       }
//     ],
//     show: false
//   });

//   const changeNameFromUI = (event, id) => {
//     console.log("************", event.target.value);
//     const personIndex = personState.persons.findIndex(p => {
//       return p.id === id;
//     });
//     console.log("findResult", personIndex);
//     const newPerson = { ...personState.persons[personIndex] }
//     newPerson.name = event.target.value;
//     const persons = [...personState.persons];
//     persons[personIndex] = newPerson;
//     console.log("persons", persons);
//     setpersonState({
//       persons: persons
//     })
//   };

//   const toggleShow = () => {
//     const showThat = personState.show;
//     setpersonState({ show: !showThat });
//   };

// const  deletePerson = (id) => {
//     const newPerson = personState.persons.filter(x => {
//       return x.id !== id;
//     });
//     setpersonState({ persons: newPerson })

//   };

//   console.log("app.js",personState);

//     let personRender = null;
//     if (personState.show) { 
//       personRender = (
//         <Person
//           changeNameFromUI={changeNameFromUI}
//           persons={personState}
//           deletePerson={deletePerson}
//         />
//       )
//     };
//     console.log("app.js",personState);
//   return ( 
//   <div>
//     <Cockpit toggleShow={toggleShow} persons={personState} show={personState.show} />
//     {personRender}
//   </div>
//   );
  
// }



export default App;
