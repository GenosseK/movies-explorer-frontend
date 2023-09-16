import AboutUser from '../AboutUser/AboutUser';
import Header from '../Header/Header';
import StatusPopup from '../StatusPopup/StatusPopup';
import './Profile.css';

function Profile({ loggedIn, headerColor, onSignOut, currentUser, onUpdateUser, statusMessage, statusImage, statusPopupOpen, setStatusPopupOpen }) {
    return (
        <>
        <Header loggedIn={loggedIn} headerColor={headerColor} />
        <AboutUser onSignOut={onSignOut} currentUser={currentUser} onUpdateUser={onUpdateUser} />
        <StatusPopup statusMessage={statusMessage} statusImage={statusImage} statusPopupOpen={statusPopupOpen} setStatusPopupOpen={setStatusPopupOpen} />
        </>
    )
};

export default Profile;