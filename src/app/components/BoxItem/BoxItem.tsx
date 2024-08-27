
import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { Button } from '../Button';
import { ADD_TO_CART, ProductData } from '@/redux/cartStore';
import { BoxWrapper, TitleProduct, ImgWrapper, Image } from './BoxItem.styles';


interface BoxItemPropsType {
	title: string,
	price: string | number,
	image: string,
	key: number,
	id: number,
	productData: ProductData
}

export const BoxItem = ((props: BoxItemPropsType) => {
	const { id, title, image, price, productData } = props;
	const dispatch = useDispatch();
	const router = useRouter();

	const addToCart = (e) => {
		dispatch(ADD_TO_CART(productData))
		alert('Product added to basket');
		e.stopPropagation()
	}
	
	const handleRedirect = () => {
		router.push(`/categories/${router.query.category}/${id}`);
	};

	return (
		<BoxWrapper onClick={handleRedirect}>
			<TitleProduct title={title} onClick={handleRedirect}>{title}</TitleProduct>
			<ImgWrapper>
				<Image title={title} alt={title} src={image} />
			</ImgWrapper>
			<p><b>{price} $</b></p>
			{/* @ts-ignore */}
			<Button bgColor="red" onClick={(e) => addToCart(e)}>Add to basket</Button>
		</BoxWrapper>
	);
});
