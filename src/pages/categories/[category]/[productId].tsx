import * as React from 'react';
import { Column, ColumnText, DetailsContainer, TitleText, Price, Description, ImgWrapper, Image, CategoryTitle} from '../../../app/styles/ProductDetails.styles';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART, ProductData } from '@/redux/cartStore';
import { useRouter } from 'next/router';
import { Button } from '@/app/components/Button';
import { getProduct } from '@/app/api/api';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { notFound } from 'next/navigation';

const ProductDetails = ({productDetails}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const addToCart = () => {
    dispatch(ADD_TO_CART(productDetails))
  }

  const handleBackClick = () => {
    router.back();
  };

	if (productDetails.category && router.query.category !== productDetails.category) {
		return <div>Wrong category or category not exist</div>
	}

  if (!productDetails) {
    notFound()
  }

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


interface ProductParams extends ParsedUrlQuery {
  productId: string
}
interface ProductProps {
  productDetails: ProductData
}

export const getServerSideProps: GetServerSideProps<ProductProps> = async(context) => {
  const { productId } = context.params as ProductParams;
  const productDetails: ProductData = await getProduct(productId);

  return {
    props: {
      productDetails,
    },
  }
}
