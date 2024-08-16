
import './userProfile.css'
import PropTypes from 'prop-types'; 


function UserProfile(props) {
    return (
        <div className="user-profile">
         <h2>USER PROFILE COMPONENT</h2>
         </div>
    )
}

UserProfile.propTypes={
    optionalArray: PropTypes.array,
}


export default UserProfile



