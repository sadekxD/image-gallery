import React from "react";
import Navbar from "./components/navbar/Navbar";
import SearchSection from "./components/search/SearchSection";
import { GlobarStyle } from "./styles/GlobaStyle";
import PhotoGallery from "./components/gallery/PhotoGallery";

// Provider
import ContextProvider from "./provider/Provider";

function App() {
	return (
		<ContextProvider>
			<div className="App">
				<GlobarStyle />
				<Navbar />
				<SearchSection />
				<PhotoGallery />
			</div>
		</ContextProvider>
	);
}

export default App;
