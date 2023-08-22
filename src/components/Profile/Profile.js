import AboutUser from '../AboutUser/AboutUser';
import Header from '../Header/Header';
import './Profile.css';

function Profile({ loggedIn }) {
    return (
        <>
        <Header loggedIn={loggedIn} />
        <AboutUser />
        </>
    )
};

export default Profile;