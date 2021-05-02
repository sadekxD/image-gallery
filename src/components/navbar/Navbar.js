import React from "react";
import styled from "styled-components";

const Navbar = () => {
	return (
		<StyledNavbar>
			<div className="nav-container">
				<div className="nav-logo">
					<h1>Goliath</h1>
				</div>
			</div>
		</StyledNavbar>
	);
};

const StyledNavbar = styled.nav`
	.nav-container {
		height: 80px;
		padding: 1rem 2rem;

		.nav-logo {
			font-family: var(--font-1);
			h1 {
				font-size: 2.4rem;
				text-shadow: -20px -20px 6px #bebebe, 20px 20px 6px #ffffff;
			}
		}
	}
`;

export default Navbar;
