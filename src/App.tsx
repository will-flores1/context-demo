import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { UserContextConsumer } from "./components/hooks/UserContext";

const App = () => {
	const [newUsername, setNewUsername] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNewUsername(value);
	};

	return (
		<div>
			<Header />
			<UserContextConsumer>
				{({ username, changeUsername }) => (
					<main>
						<p className="main">No new notifications, {username}! 🎉</p>
						<input
							type="text"
							name="newUsername"
							placeholder="New username"
							value={newUsername}
							onChange={handleChange}
						/>
						<button onClick={() => changeUsername(newUsername)}>
							Change Username
						</button>
					</main>
				)}
			</UserContextConsumer>
		</div>
	);
};

export default App;
