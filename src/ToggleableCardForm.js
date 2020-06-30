import React from 'react'
import CardUpdateForm from './CardUpdateForm';
import Card from './Card';



class ToggleableCardForm extends React.Component {

    state = {
        isOpen: true
    }




    componentDidMount() {
        this.setState({ isOpen: this.props.isOpen })
    }

    toggleForm = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    deleteUser = () => {
        this.props.deleteUser(this.props.id)
    }

    changeName = (attrs) => {
        this.props.changeName(attrs);
    }

    changeType = (attrs) => {
        this.props.changeType(attrs);
    }

    render() {
        if (this.state.isOpen) {
            return (

                <CardUpdateForm
                    isOpen={this.state.isOpen}
                    key={this.props.id}
                    id={this.props.id}
                    avatar={this.props.avatar}
                    login={this.props.login}
                    url={this.props.url}
                    rank={this.props.rank}
                    editUser={this.editUser}
                    toggleForm={this.toggleForm}
                    changeName={this.changeName}
                    changeType={this.changeType}


                />


            );
        }
        else {
            return (
                <Card
                    isOpen={this.state.isOpen}
                    key={this.props.id}
                    id={this.props.id}
                    avatar={this.props.avatar}
                    login={this.props.login}
                    url={this.props.url}
                    rank={this.props.rank}
                    deleteUser={this.props.deleteUser}
                    toggleForm={this.toggleForm}


                />
            );

        }
    }

}
export default ToggleableCardForm