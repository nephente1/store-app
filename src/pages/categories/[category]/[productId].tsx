import * as React from 'react';
import { Column, ColumnText, DetailsContainer, TitleText, Price, Description, ImgWrapper, Image, CategoryTitle} from './ProductDetails.styles';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '@/redux/cartStore';
import { useRouter } from 'next/router';
import { Button } from '@/app/components/Button';
import { getProduct } from '@/app/api/api';

const ProductDetails = ({productDetails}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const addToCart = () => {
    dispatch(ADD_TO_CART(productDetails))
  }

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div>
      <DetailsContainer>
        <Column>
          <CategoryTitle>category: {productDetails.category}</CategoryTitle>
          <TitleText>{productDetails.title}</TitleText>
          <ColumnText>Description:</ColumnText>
          <Description>{productDetails.description}</Description>
          <Price><p>Price: </p>{productDetails.price} $</Price>
          <Button bgColor="red" onClick={addToCart}>Add to basket</Button>
        </Column>

        <Column>
          <ImgWrapper>
            <Image alt={productDetails.title} src={productDetails.image} />
          </ImgWrapper>
        </Column>
        
      </DetailsContainer>
      <Button bgColor="blue" onClick={handleBackClick}>back</Button>
    </div>
  );
}

export default ProductDetails;

export async function getServerSideProps(router) {
  const productId = router.query.productId;
	try {
		const productDetails: string[] = await getProduct(productId);
		return {
			props: {
				productDetails,
			},
		}
  } catch (error) {
		return {
			props: {productDetails: null},
		};
	}
}
