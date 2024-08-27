import { getCategoryProducts } from '@/app/api/api';
import { useRouter } from 'next/router';
import { BoxItem } from '@/app/components/BoxItem/BoxItem';
import { Button } from '@/app/components/Button';
import { BoxesContainer, CategoryTitle, ColumnLayout, ContentContainer } from '@/app/styles/styles';

const CategoryPage = ({categoryProducts}) => {
  const router = useRouter();
  const categoryName = router.query.category;

  const displayCategoryProducts = categoryProducts.map((el: any) => (
    <BoxItem 
      key={el.id} 
      productData={el} 
      id={el.id} 
      title={el.title} 
      price={el.price} 
      image={el.image}/>
    )
  );

  const handleBackClick = () => {
    router.back();
  };
	
  return(
    <ColumnLayout>
      <CategoryTitle>{categoryName}</CategoryTitle>
      <Button bgColor="blue" onClick={handleBackClick}>back</Button>
      <ContentContainer>
        <BoxesContainer>
          {displayCategoryProducts}
        </BoxesContainer>
      </ContentContainer>
    </ColumnLayout>
  )
}

export default CategoryPage;


export async function getServerSideProps(router) {
  const category = router.query.category;
	try {
		const categoryProducts: string[] = await getCategoryProducts(category);
		return {
			props: {
				categoryProducts,
			},
		}
  } catch (error) {
		return {
			props: {categoryProducts: null},
		};
	}
}