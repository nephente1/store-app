import styled from 'styled-components';

export const BoxWrapper = styled('div')`
	box-shadow: -2px 2px 6px 2px rgba(0,0,0,0.10);
	border: 2px solid transparent;
	padding: 20px 20px;
	margin: 10px;
	border-radius: 4px;
	display: flex;
  flex-wrap: wrap;
	flex: 1 1 240px;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	&:hover {
		box-shadow: -2px 2px 6px 2px rgba(0,0,0,0.10);
		border: 2px solid ${props => props.theme.blue};
	}
`;

export const TitleProduct = styled('h3')`
	color: ${props => props.theme.blue};
	font-size: 20px;
	margin: 0 0 15px 0;
	text-overflow: ellipsis;
    overflow: hidden;
    width: 230px;
	display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
`;

export const ImgWrapper = styled('div')`
	max-width: 160px;
	max-height: 160px;
`;

export const Image = styled('img')`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
