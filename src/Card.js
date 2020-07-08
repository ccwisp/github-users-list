import React from "react";

class Card extends React.Component {
  handleDeleteClick = () => {
    // Passing user deletion handler to parent
    this.props.deleteUser(this.props.id);
  };

  handleEditClick = () => {
    // Passing form toggle handler to parent
    this.props.toggleForm();
  };

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
            <a
              className="header"
              href={this.props.url}
              target="_blank"
              style={{ color: "gray" }}
            >
              {this.props.login}
            </a>

            <div className="meta">
              <span className="date" style={{ color: "gray" }}>
                {" "}
                {this.props.rank}
              </span>
            </div>
          </div>
          <div className="extra content">
            <a onClick={this.handleEditClick}>
              <i
                aria-hidden="true"
                className="circular inverted teal edit icon"
              ></i>
            </a>

            <a onClick={this.handleDeleteClick}>
              <i
                aria-hidden="true"
                className="circular inverted teal user delete icon"
              ></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
