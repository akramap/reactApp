import React from 'react';
import   "../../../styles/Person.css";
import PropTypes from "prop-types";

const Person = (props) => {

  return  props.persons.map(person => {
        return (<div className='Person' key={person.id}>
                <p onClick={()=>props.deletePerson(person.id)}>Im a Person and Im {person.name} and my Age is: {person.age} </p>
                <p>{props.children}</p>
                <input type='text' onChange={(event)=>props.changeNameFromUI(event,person.id)} value={person.name} />
           
           </div>)
      })
}

Person.propTypes = {
      deletePerson: PropTypes.func,
      name: PropTypes.string,
      age: PropTypes.number.isRequired
};
export default Person;