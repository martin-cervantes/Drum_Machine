import React from 'react';
import DrumPad from './DrumPad';
import sounds from './sounds';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: String.fromCharCode(160),
    };

    this.displayName = this.displayName.bind(this);
  }

  displayName(name) {
    this.setState({
      display: name
    });
  }

  render() {
    return (
      <div id='drum-machine'>
        <h1 id="title">Drum Machine</h1>

        <p id='display'>{this.state.display}</p>

        <div id="pads">
          {sounds.map(sound => (
              <DrumPad
                clip={sound.url}
                clipId={sound.id}
                keyCode={sound.keyCode}
                keyTrigger={sound.keyTrigger}
                displayName={this.displayName}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

export default App;
