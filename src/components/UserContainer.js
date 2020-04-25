import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

const UserContainer = (props) => {
    useEffect(() => {
        props.fetchUsers();
    }, []);

    return (
        <pre>
            {props.userData && JSON.stringify(props.userData.users.slice(0, 2))}
        </pre>
    );
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
