import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../provider/Provider";

const SearchSection = () => {
	const { searchQuery, setSearchQuery } = useContext(Context);

	const handleChange = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<StyledSearch>
			<div className="search-container">
				<form className="search-form">
					<input
						type="text"
						placeholder="Search"
						className="search-input"
						value={searchQuery}
						onChange={handleChange}
					/>
				</form>
			</div>
		</StyledSearch>
	);
};

const StyledSearch = styled.div`
	.search-container {
		padding: 4rem 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #f7f2f2;

		.search-form {
			display: flex;
			align-items: center;
			max-width: 600px;
			min-width: 300px;
			border-radius: 0.2rem;
			overflow: hidden;
			background: linear-gradient(145deg, #ffffff, #dedada);
			box-shadow: 20px 20px 60px #d2cece, -20px -20px 60px #ffffff;

			.search-input {
				font-size: 1.4rem;
				padding: 0.5rem 1rem;
			}

			button {
				font-size: 1.4rem;
				padding: 0.5rem 1rem;
				background-color: #eebfbf;
			}
		}
	}
`;

export default SearchSection;
