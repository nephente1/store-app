import styled from 'styled-components';

export const CartItem = styled('div')`
	display: flex;
  padding: 10px 0;
	flex-wrap: nowrap;
	border-top: 1px solid ${props => props.theme.lightDark};
	width: 100%;
	&:first-of-type {
		font-weight: 700;
	}
`;

export const ItemName = styled('p')`
  display: flex;
	align-items: center;
	justify-content: center;
  flex: 1 1 300px;
  white-space: wrap;
  text-align: center;
`;

export const ItemAmount = styled('p')`
	display: flex;
	align-items: center;
	justify-content: center;
  width: 140px;
	text-align: center;
	& span {
		cursor: pointer;
	}
`;

export const ItemPrice = styled('p')`
	width: 120px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const RemoveOption = styled('p')`
	width: 100px;
	text-align: center;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
`;
