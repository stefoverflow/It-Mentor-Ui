import { observer } from "mobx-react-lite";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";

import './ClientsPage.scss';

const ClientsPage = () => {
    return (
        <div className="clients-page">
            <ProfileHeader/>
        </div>
    )
};

export default observer(ClientsPage);