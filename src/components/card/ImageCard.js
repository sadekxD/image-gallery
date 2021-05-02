import React from "react";
import styled from "styled-components";

const ImageCard = ({ src, title }) => {
	return (
		<Card>
			<div className="image-wrapper">
				<img src={src} alt={title} />
			</div>
		</Card>
	);
};

const Card = styled.div`
	border-radius: 0.5rem;
	overflow: hidden;
	width: 100%;
	height: 100%;

	.image-wrapper {
		height: 100%;
		cursor: pointer;
		position: relative;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: all 0.3s ease-in-out;
		}

		&:hover {
			img {
				transform: scale(1.1) rotateZ(2deg);
			}
		}

		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0),
				rgba(0, 0, 0, 0.4)
			);
			z-index: 1;
		}
	}
`;

export default ImageCard;
