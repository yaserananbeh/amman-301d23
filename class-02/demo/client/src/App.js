import React from 'react';
import Parent from './components/Parent';
class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Main Component</h1>
        {/* We are creating a new instance of the Parent component; just as if we are saying new Parent() */}
        <Parent />
      </div>
    )
  }
}

export default App;