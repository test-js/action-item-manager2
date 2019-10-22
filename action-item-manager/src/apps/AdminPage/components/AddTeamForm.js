import React from 'react';
import Dropdown from 'common/Dropdown';
import Button from 'common/Button';
import { getByCustomer } from 'model/user';

class AddTeamForm extends React.Component {
    componentDidMount() {
        const { customerId } = this.props;
        const allUsers = getByCustomer({ customerID: customerId }).map(user => {
            return {
                ...user,
                value: user.id,
                label: `${user.firstName} ${user.lastName}`
            };
        });
    
        this.setState({
            users: allUsers
        });
    }

    state = {
        users: []
    };
    
    render() {
        const { addTeam, newTeamName, onChangeName, onChangeUser } = this.props;
        const { users} = this.state;

        return (
            <div>
                <input
                    name="Team Name"
                    value={newTeamName}
                    onChange={onChangeName}
                    type="text"
                    placeholder="new team name"
                />
                <Dropdown
                    placeholder="select team manager"
                    value={this.props.selectedUser}
                    onChange={onChangeUser}
                    options={users}
                />
                <Button
                    text="Create Team"
                    onClick={() => addTeam()}
                />
            </div>
        );
    }
}

export default AddTeamForm;
