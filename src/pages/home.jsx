import Sidebar from '../chatComponents/01_sidebar';
import Chats from '../chatComponents/02_chats';

const Home = () => {
    return (
        <div id="chatPage">
            <Sidebar/>
            <Chats/>
        </div>
    );
}

export default Home;