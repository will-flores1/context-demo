import React, { createContext, ReactNode, useState } from "react";

interface Props {
	children: ReactNode;
}

interface Context {
	username: string;
	changeUsername?: any; // Fix any type
}

const { Provider, Consumer } = createContext<Context>({
	username: "",
});

const UserContextProvider: React.FC<Props> = (props) => {
	const [username, setUsername] = useState("");

	const changeUsername = (username: string) => {
		setUsername(username);
	};

	return (
		<Provider value={{ username, changeUsername: changeUsername }}>
			{props.children}
		</Provider>
	);
};

export { UserContextProvider, Consumer as UserContextConsumer };
