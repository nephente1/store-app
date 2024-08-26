import Link from 'next/link';
import styled from 'styled-components';

export const NavWrapper = styled('div')`
	background:  ${props => props.theme.dark};
	display: flex;
	width: 100%;
	height: auto;
	width: 100%;	@media screen and (min-width: 615px){
		height: 70px;
	}
`;

export const Container = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	margin: auto;
	flex-direction: column;
	width: 100%;

	@media (min-width: 615px) {
		width: 80%;
		flex-direction: row;
		justify-content: space-between;
		margin: auto;
	}
`

export const Nav = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	margin-right: 15px;
	@media screen and (min-width: 615px){
		display: inline-flex;
		flex-direction: row;
	}
`;
export const LinkItem = styled(Link)`
	color: #fff;
	font-size: 18px;
	text-decoration: none;
	padding: 10px 20px;
	display: flex;
	line-height: 1;
	align-items: center;
	position: relative;
	&:hover {
		color: ${props => props.theme.red};
		background: ${props => props.theme.dark};
	}
	& span {
		margin-left: 6px;
	}
`;

export const Logo = styled('div')`
	color: white;
	font-size: 28px;
	display: flex;
`;

export const CartAmountNumber = styled('div')`
	position: absolute;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background: ${props => props.theme.red};
	color: white;
	top: 7px;
	right: -15px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 600;
`;

