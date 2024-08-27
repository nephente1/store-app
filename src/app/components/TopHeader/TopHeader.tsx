
import React from 'react';
import { RootState } from '@/redux/rootReducer';
import { useSelector } from 'react-redux';
import { NavWrapper, Logo, Nav, LinkItem, CartAmountNumber, Container } from './TopHeader.styles';


export const TopHeader = () => {
	const getActualCart = useSelector( (state: RootState) => state.cartReducer);
	const cartItems = getActualCart.cartData;
	const getProductsAmount = React.useMemo(() => {
		return cartItems.reduce((result, item) => item.amount + result, 0);
	}, [cartItems]);

	return (
		<NavWrapper>
			<Container>
			<Logo>The best shop</Logo>
			<Nav>
				<LinkItem href="/">All categories</LinkItem>
				<LinkItem href="/cart">
					<CartAmountNumber>{getProductsAmount}</CartAmountNumber>
					Shopping cart
					<span className="material-symbols-outlined">shopping_basket</span>
				</LinkItem>
			</Nav>
			</Container>
		</NavWrapper>
	);
};
