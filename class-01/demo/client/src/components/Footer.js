import React from 'react'; // import the react class from the react library

// Define a class component named Footer 
// That inherits the Class React Component
class Footer extends React.Component {


    // we extend the React Component to use the React method (behavior) render
    render() { // will render anything within the return Statement 
        const myName = 'tamim h';
        return (

            <footer>
                <span>Made by {myName}</span>
            </footer>

        )
    }
}

// export makes this file visible to other files/ components
export default Footer;