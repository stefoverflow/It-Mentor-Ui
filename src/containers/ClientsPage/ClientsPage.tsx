import { observer } from "mobx-react-lite";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";

import './ClientsPage.scss';

const ClientsPage = () => {
    return (
        <div className="clients-page">
            <BurgerMenu/>
        </div>
    )
};

export default observer(ClientsPage);