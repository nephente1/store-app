import Link from 'next/link';
import styled from 'styled-components';

export const theme = {
	blue: '#1976d2',
	light: '#fafafa',
	lightDark: '#dbdbdb',
	red: '#f50057',
	dark: '#565656'
};

export const AppWrapper = styled('div')`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Container = styled('div')`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const ContentContainer = styled('div')`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 600px){
		flex-direction: row;
	}
`;

export const PageContainer = styled('div')`
	display: flex;
	flex-direction: column;
	padding: 20px 30px;
  width: 100%;

	@media screen and (min-width: 615px){
		width: 80%;
			margin: auto;
			padding: 20px 0;
	}
`;

export const BoxesContainer = styled('div')`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const CategoryTitle = styled('h3')`
	color: ${props => props.theme.blue};
	font-size: 28px;
	text-transform: capitalize;
  margin-bottom: 20px;
`;

export const BigTitle = styled('h2')`
  color: ${props => props.theme.red};
	font-size: 28px;
	text-transform: uppercase;
  margin-bottom: 20px;
`;

export const ColumnLayout = styled.div`
	display: flex;
	flex-direction: column;
	& span {
		font-size: 50px;
	}
`;

export const CategoryLink = styled(Link)`
	text-decoration: none;
	color: ${props => props.theme.blue};
	margin: 0 0 10px 0;
	text-transform: capitalize;
	font-weight: 600;
	font-size: 28px;
	&:hover {
		color: ${props => props.theme.dark};
	}
`;

