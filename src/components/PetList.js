import React from "react"
import SinglePet from "./SinglePet"

const cody = {
  id: 2,
  name: "Cody",
  description: "Adorable pug who loves to hug",
  species: "dog"
}

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
class PetList extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'all'
    }
  }

  render() {
    const { pets } = this.props;
    return (
      <>
        <div className="pet-list">
          {pets.map(pet => (
            <SinglePet key={pet.id} pet={pet} />
          ))}
        </div>
      </>
    )
  }
}

export default PetList
