import Repo from './Repo'
import { Link } from 'react-router-dom'
const ReposList = ({ userDetails, cleanRepos }) => {
    return (
        <>  
            <div className='top-info'>
                <Link to='/' className='btn center' onClick={cleanRepos}>Back</Link>
            </div>
            <div className="repositories">
                {userDetails.map((repo)=> ( 
                        <Repo 
                            name={repo.name} 
                            desc={repo.description} 
                            created={repo.created_at}
                            key={repo.id}
                            url={repo.svn_url}
                            stargazers={repo.stargazers_count}
                            watchers={repo.watchers_count}
                            forks={repo.forks_count}
                            license={repo.license ? (repo.license.name) : ('no-license')}
                        />              
                ))}
            </div>
        </>
    )
}

export default ReposList
