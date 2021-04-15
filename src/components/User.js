import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const User = ({ name, img, userDetailsHandler }) => {
    return (
        <Link to={`/repo/${name}`} className='user' onClick={userDetailsHandler} value={name}>
            <img src={`${img}`} alt=""/>
            <div className='content'>
                <h2><i className="fas fa-user-circle"></i> {name}</h2>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </Link>
    )
}
User.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    userDetailsHandler: PropTypes.func,
}
export default User
