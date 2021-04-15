import './style/App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import UsersList from './components/UsersList'
import ReposList from './components/ReposList'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  const [users, setUsers] = useState([]); //users
  const [userError, setUserError] = useState(null); //error handling
  const [repoError, setRepoError] = useState(null); //error handling
  const [userDetails, setUserDetails] = useState([]); //repos
  const [searchTerm, setSearchTerm] = useState('') //search handling

  //users
  useEffect(() => {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      if(data.message) {
        setUserError(data.message)
        console.log(data.message)
      } else {
        setUsers(data)
        setUserError(null)
        console.log(data)
      }
    })
  }, [])

  //repos
  const userDetailsHandler = async (e) => {
    const currentUser = e.currentTarget.getAttribute('value');
    const res = await fetch(`https://api.github.com/users/${currentUser}/repos`)
    const userData = await res.json();
        if(userData.message) {
          setRepoError(userData.message)
          console.log(userData.message)
        } else {
          setUserDetails(userData)
          setRepoError(null)
          console.log(userData)
        }
    }
   //cleanup
   const cleanRepos = () => {
    setUserDetails([]);
   } 
  //search
  const searchUserHandler = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <Router>
      <div className="App">
        <Header searchUserHandler={searchUserHandler} cleanRepos={cleanRepos}/>
        <div className="main">
          <Route path='/' exact render={(props) => (
            <>
            { userError ? (<h1>{userError}</h1>) : (
                <UsersList 
                  userDetailsHandler={userDetailsHandler} 
                  users={users}
                  searchTerm={searchTerm}
                />
              )
            }
            </>
          )} />
            <Route path='/repo/:name' render={(props) => (
              <>
            { repoError ? 
              (<div className='repositories'>
              <h1>Something went wrong!</h1>
              <p>Message: {repoError}</p></div>) : (
                <ReposList 
                  userDetails={userDetails} 
                  cleanRepos={cleanRepos}
                />
              )
            }
              </>
            )}/>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
