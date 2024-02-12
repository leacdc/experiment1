import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ProductsList(props){
    return (
        <React.Fragment>
            <tr className='highlight-row'>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.description}</td>
                <td>{props.category}</td>
                <td><Link to={`/product/${props.id}`} className='links'>Buscar</Link></td>
            </tr>
        </React.Fragment>
    )
}

ProductsList.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    detail: PropTypes.string
}

export default ProductsList