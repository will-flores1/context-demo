import React, { createContext, ReactNode, useState } from "react";

interface Props {
	children: ReactNode;
}

interface Context {
	username: string;
	changeUsername: (name: string) => void; // Fix any type
}

const { Provider, Consumer } = createContext<Context>({
	username: "",
	changeUsername: () => {},
});

const UserContextProvider: React.FC<Props> = (props) => {
	const [username, setUsername] = useState("");

	const changeUsername = (name: string) => {
		setUsername(name);
	};

	return (
		<Provider value={{ username, changeUsername }}>{props.children}</Provider>
	);
};

export { UserContextProvider, Consumer as UserContextConsumer };
