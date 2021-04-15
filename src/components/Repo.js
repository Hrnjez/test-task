import PropTypes from 'prop-types'

const Repo = ({ name, desc, created, url, stargazers, watchers, forks, license }) => {
    const date = new Date(created);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return (
        <div className='repo'>
            <h4><span className='top-heading'>{license}</span> {name}</h4>
            <div >
                <p className='desc'><span>Description: </span> {desc}</p>
                <p><span>Created: </span> {day+'/'+month+'/'+year}</p>
                <div className="repo-info">
                    <div className='repo-counts'>
                        <p><i className="fas fa-star"></i>{stargazers}</p>
                        <p><i className="fas fa-user"></i>{watchers}</p>
                        <p><i className="fas fa-code-branch"></i>{forks}</p>
                    </div>
                </div>
            </div>
            <a target='_blank' rel="noreferrer" href={`${url}`}>View Repo <i className="fas fa-angle-double-right"></i></a>
        </div>
    )
}
Repo.propTypes = {
    desc: PropTypes.string,
    name: PropTypes.string,
    created: PropTypes.string,
}
export default Repo
