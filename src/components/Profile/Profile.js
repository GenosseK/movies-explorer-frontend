import AboutUser from '../AboutUser/AboutUser';
import Header from '../Header/Header';
import './Profile.css';

function Profile({ loggedIn, headerColor, onSignOut, currentUser, onUpdateUser }) {
    return (
        <>
        <Header loggedIn={loggedIn} headerColor={headerColor} />
        <AboutUser onSignOut={onSignOut} currentUser={currentUser} onUpdateUser={onUpdateUser} />
        </>
    )
};

export default Profile;