import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider, SoundsProvider, createSounds, createTheme} from 'arwes';

const sounds = {
    shared: { volume: 1, },  // Shared sound settings
    players: {  // The player settings
      click: {  // With the name the player is created
        sound: { src: ['/assets/sounds/click.mp3'] }  // The settings to pass to Howler
      },
      typing: {
        sound: { src: ['/assets/sounds/typing.mp3'] },
        settings: { oneAtATime: true }  // The custom app settings
      },
      deploy: {
        sound: { src: ['/assets/sounds/deploy.mp3'] },
        settings: { oneAtATime: true }
      },
      test: {
        sound: { src: ['/assets/language/final_consonants/H.mp3'] },
        settings: { oneAtATime: true }
      }
    }
  };

ReactDOM.render(
        <BrowserRouter>
            <ThemeProvider theme={createTheme()}>
                <SoundsProvider sounds={createSounds(sounds)}>
                    <App />
                </SoundsProvider>
            </ThemeProvider>
        </BrowserRouter>,
  document.getElementById('root')
)
