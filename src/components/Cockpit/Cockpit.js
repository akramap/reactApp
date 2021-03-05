import React,{useEffect} from 'react';

const Cockpit = (props) => {
    // useEffect(() => {
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    const classes = [];
    if (props.persons.length <= 2) {// classes=red
        classes.push('red', 'bold')
    }
    if (props.persons.length <= 1) {
        classes.push('green')
    }
    const styles = {
        border: '15px red',
        padding: '15px',
        textAlign: 'center'
    };

   

    const buttonStyle ={
        backgroundColor:'green',
            height: '50px',
            position: 'relative',
            border: '3px solid green',
            marginLeft:'635px',
            width:'100px'
    }
    if (props.show) {
        buttonStyle.backgroundColor = 'red';
        
    }
    return (
        <div>
            <div style={styles}>
                <h1>React APP</h1>
                <p className={classes.join(' ')}>does this works</p>
            </div>
            
            <button style={buttonStyle} onClick={() => props.toggleShow()}> Toggle </button>
        </div>
    )
}


export default Cockpit;