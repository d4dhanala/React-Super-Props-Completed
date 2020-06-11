# Super Props

React Components Practice

## Getting Started

- Clone or Fork this Repo.  Run npm install to add node_modules.

- Run `yarn start` and make sure your page loads.

## Instructions

- [ ] Create a SuperHeroe class. It should contain the following properties: 
  ```js
  id
  name
  description
  imageUrl
  ```

- [ ] Create a SuperHeroes React class component. It should contain the following state and pass this state down as props to the SuperHeroCard functional component mentioned below.  The state should contain the following: 
  ```js
    this.state = { 
        superHeroes:[
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
  ```

- [ ] Create a SuperHeroCard React functional component. It should use the following JSX to display any superhero that is passed to it through props:
  ```js
  <div class="container">
    <div class="text-center">
      <div class="card d-inline-block w-25 mx-4 my-2">
        <img class="card-img-top img-fluid" src=(imageUrl from props)/>
        <div class="card-body">
          <h5 class="card-title">(name from props)</h5>
          <p class="card-text">(description from props)</p>
        </div>     
      </div>
    </div>
  </div>
  ```



