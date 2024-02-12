import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function UserList(props){
    return (
        <React.Fragment>
            <tr className='highlight-row'>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.email}</td>
                <td><Link to={`/usuario/${props.id}`} className='links'>Clic</Link></td>
            </tr>
        </React.Fragment>
    )
}

UserList.propTypes = {
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    detail: PropTypes.string
}

export default UserList