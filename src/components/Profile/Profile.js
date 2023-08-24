import AboutUser from '../AboutUser/AboutUser';
import Header from '../Header/Header';
import './Profile.css';

function Profile({ loggedIn, headerColor }) {
    return (
        <>
        <Header loggedIn={loggedIn} headerColor={headerColor} />
        <AboutUser />
        </>
    )
};

export default Profile;