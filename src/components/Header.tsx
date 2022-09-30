import "../App.css";
import { UserContextConsumer } from "../components/hooks/UserContext";

const Header = () => {
	return (
		<header>
			<UserContextConsumer>
				{({ username }) => <p>Welcome, {username}!</p>}
			</UserContextConsumer>
		</header>
	);
};

export default Header;
