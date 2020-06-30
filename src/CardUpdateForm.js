import React from 'react'
// Component for update form

class CardUpdateForm extends React.Component {

  handleNameChange = (e) => {                             // Passing name change handler to parent
    this.props.changeName(e.target)
  };

  handleTypeChange = (e) => {                             // Passing type change handler to parent
    e.target.id = this.props.id


    this.props.changeType(e.target)
  };

  handleUpdateClick = () => {  
    const formName = document.getElementById(this.props.id).value;                           // Passing form change handler to parent
    formName==="" ? window.alert("Username cannot be empty!"):this.props.toggleForm()

  }


  render() {
    return (



      <div className="ui special card">
        <div className="ui fluid card">
          <div className="blurring dimmable image">
            <div className="ui dimmer">
              <div className="content">
                <div className="center">
                  <div className="ui inverted button">Add Friend</div>
                </div>
              </div>
            </div>
            <img src={this.props.avatar}></img>
          </div>
          <div className="content">
            <div className="ui right labeled input">

              <input value={this.props.login} name="form" type="text" id={this.props.id} onChange={this.handleNameChange} ></input>
              <a className="ui label" onClick={this.handleUpdateClick}>Update</a>
            </div>
            <div className="ui hidden divider"></div>
            <div className="meta">
              <select className="ui teal dropdown" onClick={this.handleTypeChange}>

                <option value="User" >User</option>
                <option value="Admin" >Admin</option>
              </select>
            </div>
          </div>

        </div>
      </div>




    )
  }

}
export default CardUpdateForm