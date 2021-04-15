import User from './User'

const UsersList = ({ users, userDetailsHandler, searchTerm }) => {
    return (
        <div className='users'>
            {users.filter((user) => {
                if (searchTerm === '') {
                    return user
                } else if (user.login.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return user
                } else return ''
            }).map((user) => (
                <User 
                    key={user.id} 
                    name={user.login} 
                    img={user.avatar_url}
                    type={user.type}
                    id={user.node_id}
                    userDetailsHandler={userDetailsHandler}
                    url={user.html_url}
                />
            ))}
        </div>
    )
}

export default UsersList
