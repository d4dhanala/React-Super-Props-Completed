import React, { Component } from 'react';
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.css';
import Villian from './Villian';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      villains: [
        { 
          name: 'Wolverine', 
          description: 'A mutant with    healing power, adamantium metal claws and no-nonsense attitude makes the man called Logan, one of the most ferocious heroes in the universe. (Marvel.com)', 
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/72/Wolverineandthexmenanimated.jpg' 
      },
      { 
          name: 'Dr Strange', 
          description: 'Formerly a renowned surgeon, Doctor Stephen Strange now serves as the Sorcerer Supreme—Earth\'s foremost protector against magical and mystical threats. (Marvel.com)', 
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg' 
      },
      { 
          name: 'Star-Lord', 
          description: 'Leader of the Guardians of the Galaxy, Peter Quill, known as Star-Lord, brings a sassy sense of humor while protecting the universe from any and all threats. (Marvel.com)', 
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/15/ST1.PNG' 
      }
      ]
    }



  }
  render() {
    return (<div><Header />

      <div class="container">
        <div class="text-center">
          <Villian villains={this.state.villains}/>
          
        </div>
      </div>
    </div>);
  }
}

export default App;