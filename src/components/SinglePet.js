import React from "react"

class SinglePet extends React.Component {
  constructor() {
    super()
    this.state = {
      adopted: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({ adopted: !this.state.adopted })
  }
  render() {
    const { pet } = this.props;
    const { adopted } = this.state;
    return (
      <div className={`single-pet ${adopted && 'adopted'}`}>
        <div>{pet.name}</div>
        <div>{pet.description}</div>
        <div>{pet.species}</div>
        <div>{adopted ? 'Adopted!' : 'Available'}</div>
        <button onClick={this.handleClick}>Toggle Status</button>
      </div>
    )
  }
}

export default SinglePet
