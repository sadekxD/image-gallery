import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../provider/Provider";
import ImageCard from "../card/ImageCard";

const PhotoGallery = () => {
	const { data, searchQuery } = useContext(Context);
	console.log(data, searchQuery);

	return (
		<StyledGallery>
			<div className="gallery-wrapper">
				{data?.map((item) => (
					<ImageCard key={item.id} src={item.urls.regular} />
				))}
			</div>
		</StyledGallery>
	);
};

const StyledGallery = styled.div`
	.gallery-wrapper {
		padding: 2rem 2rem;
		display: grid;
		grid-template-rows: auto;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
	}
`;

export default PhotoGallery;
