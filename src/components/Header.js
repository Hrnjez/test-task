import { Link } from 'react-router-dom'

const Header = ({ searchUserHandler, cleanRepos }) => {
    return (
        <div className='header'>
            <Link to='/' onClick={cleanRepos} className='title'>GitHub Users <i className="fab fa-github" ></i></Link>
            <form>
                <input type="text" className="input" placeholder='Search Users...' onChange={searchUserHandler} />
            </form>
        </div>
    )
}

export default Header
