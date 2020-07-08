import React from "react"
import PetList from "./PetList"
import axios from "axios"

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from "../petdata"

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: [],
    }
  }
  async componentDidMount() {
    const { data } = await axios.get('/api/pets')
    this.setState({ pets: data })
  }

  render() {
    // const pets = this.state.pets;
    const { pets } = this.state;
    return (
      <>
        <h1>Adoption Center</h1>
        <PetList pets={pets} />
      </>
    )
  }
}

export default Root
