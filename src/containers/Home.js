import React from 'react';
import Speech from 'react-speech';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { syllables: [] };
    }

    // function getPronunciation(word){
            
    //     process
    //     state add sylable 1
    //     word - sylabble
    //     while word length > 0{
    //         process
    //         state add sylable 1
    //         word - sylabble
    //     }
    // };

    render() {
        return (  
            <div>
                <Speech text="akt" voice="Google UK English Female"/>
            </div>
        )
    }
}

export default Home;