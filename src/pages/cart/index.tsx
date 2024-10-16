import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, REDUCE_PRODUCT, REMOVE_FROM_CART } from '../../redux/cartStore';
import { RootState } from '@/redux/rootReducer';
import { ProductData } from '@/redux/cartStore';
import { CategoryTitle, Container } from '@/app/styles/styles';
import { Button } from '@/app/components/Button';
import { useRouter } from 'next/router';
import { CartItem, ItemName, ItemAmount, ItemPrice, RemoveOption } from '@/app/styles/CartItem.styles';

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((state: RootState) => state.cartReducer);
	const router = useRouter();

	const getTotalCost = React.useMemo(() => {
		return cartData.reduce((result, item) => item.amount * item.price + result, 0).toFixed(2);
	}, [cartData]);

	const itemsPrice = (a: number, b: number) => a * b;

	const renderCart = React.useMemo(() => {
		return cartData.map((product: ProductData) =>
			<CartItem key={product.id}>
				<ItemName>{product.title}</ItemName>
				<ItemAmount>
					{product.amount} pcs. 
					<span className="material-symbols-outlined" onClick={() => dispatch(ADD_TO_CART(product))}>add</span>
					<span className="material-symbols-outlined" onClick={() => dispatch(REDUCE_PRODUCT(product))}>remove</span>
				</ItemAmount>
				<ItemPrice>{itemsPrice(product.price, product.amount)} $</ItemPrice>
				<RemoveOption>
					<span className="material-symbols-outlined" onClick={() => dispatch(REMOVE_FROM_CART(product))}>delete</span>
				</RemoveOption>
			</CartItem>
		);
	},[cartData, dispatch]);

	const cartRedirection = () => {
		router.push('/cart');
		alert('Thanks for buying!');
	};

	const handleBackClick = () => {
		router.back();
	};

	return (
		<Container>
			<CategoryTitle>Full Cart</CategoryTitle>
			<CartItem>
				<ItemName>Product name</ItemName>
				<ItemAmount>Amount</ItemAmount>
				<ItemPrice>Price</ItemPrice>
				<RemoveOption>Remove item</RemoveOption>
		</CartItem>
		{ cartData.length ?
				<>
					{renderCart}
					<CartItem>
						<ItemName><b>Sum up value:</b></ItemName>
						<ItemAmount/>
						<ItemPrice><b>{getTotalCost} $</b></ItemPrice>
						<RemoveOption/>
					</CartItem>
					<Button onClick={cartRedirection} size="small" bgColor="blue">Finalize order</Button>
				</> :
				<p>Basket is empty, add something to cart</p>
			}
			<Button bgColor="blue" onClick={handleBackClick}>back</Button>
		</Container>
	);
};

export default CartPage;
