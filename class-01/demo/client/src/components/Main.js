import React from 'react';

class Main extends React.Component {

    render() {
        const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNCDxGaGv8EqicYmQAYQSC99zCcydbI09Q344f_WG19KZx1cM__1WveBAYdpfpAVeeIqA&usqp=CAU';

        return (
            <main>
                <div>
                    <h1>Hello World</h1>
                    <img src={imageUrl} alt="" />
                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNCDxGaGv8EqicYmQAYQSC99zCcydbI09Q344f_WG19KZx1cM__1WveBAYdpfpAVeeIqA&usqp=CAU" alt="" /> */}
                </div>
            </main>
        )
    }
}

export default Main;