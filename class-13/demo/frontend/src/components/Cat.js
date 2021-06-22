
import React from 'react';

class Cats extends React.Component {
    render() {
        return (
            <>
                <h2>My Cats</h2>
                {this.props.cats.length && this.props.cats.map((cat, idx) => (
                    <div key={idx}>
                        {cat.name}
                        <button onClick={e => this.props.deleteMyCat(idx)} >Delete Cat</button>
                        <button onClick={e => this.props.showUpdateForm(cat, idx)} >Show Update Form</button>
                    </div>
                ))}
            </>
        )
    }
}

export default Cats;