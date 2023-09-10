import AboutUser from '../AboutUser/AboutUser';
import Header from '../Header/Header';
import './Profile.css';

function Profile({ loggedIn, headerColor, onSignOut }) {
    return (
        <>
        <Header loggedIn={loggedIn} headerColor={headerColor} />
        <AboutUser onSignOut={onSignOut} />
        </>
    )
};

export default Profile;