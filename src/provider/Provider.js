import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiURL } from "../api";

export const Context = React.createContext(null);

const ContextProvider = ({ children }) => {
	const [searchQuery, setSearchQuery] = useState("code");
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(apiURL(searchQuery), {
				headers: {
					Authorization:
						"Client-ID eq0f39vf_5BLLHO5AKUjUZY_iPoe8Asp13yEIfQ0YZo",
				},
			})
			.then((res) => setData(res.data.results))
			.catch((err) => console.log(err));
	}, [searchQuery]);

	const contextValues = { searchQuery, setSearchQuery, data, setData };

	return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};

export default ContextProvider;
