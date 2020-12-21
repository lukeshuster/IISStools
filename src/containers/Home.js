import React from 'react';
import {Howl, Howler} from 'howler';
import {InitialConsonants, Vowels, FinalConsonants} from '../syllable-types'

function play_audio(file_names) {
    let sound = new Howl({
        src: [file_names[0]],
        volume: 0.5,
        onend: function() {
            file_names.shift();
            if (file_names.length > 0) {
                play_audio(file_names);
            }
        }
    });      
    sound.play();
}

function getSyllable(word) {
    word = word.toUpperCase();
    let copy = word.slice(0,3);
    console.log(`input: ${word} - string: ${copy}`);

    // CV or CVC
    for (const [key] of Object.entries(InitialConsonants)){
        if (copy == key){
            console.log(key);
        }
        else{
            copy = word.slice(0,2);
            if (copy == key){
                console.log(key);
            }
            else{
                copy = word.slice(0,1);
                if (copy == key){
                    console.log(key);
                }
            }
        }
    }
    // V or VC
    for (const [key] of Object.entries(Vowels)){
        if (copy == key){
            console.log(key);
        }
        else{
            copy = word.slice(0,2);
            if (copy == key){
                console.log(key);
            }
            else{
                copy = word.slice(0,1);
                if (copy == key){
                    console.log(key);
                }
            }
        }
    }
}


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
                <button onClick={() => {play_audio(['/assets/language/initial_consonants/K.mp3', '/assets/language/vowels/A.mp3', '/assets/language/initial_consonants/S.mp3', '/assets/language/vowels/IY.mp3', '/assets/language/letters/L.mp3'])}}>Button </button>
                {getSyllable("test")}
            </div>
        )
    }
}

export default Home;