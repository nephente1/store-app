import { getCategories, getCategoryProducts } from '@/app/api/api';
import { useRouter } from 'next/router';
import { BoxItem } from '@/app/components/BoxItem/BoxItem';
import { Button } from '@/app/components/Button';
import { BoxesContainer, CategoryTitle, ColumnLayout, ContentContainer } from '@/app/styles/styles';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { ProductData } from '@/redux/cartStore';

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
      image={el.image}
      category={el.category}
    />
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


interface CategoryParams extends ParsedUrlQuery {
  category: string
}

type CategoryProps = {
  categoryProducts?: ProductData[],
}

export const getStaticPaths: GetStaticPaths<CategoryParams> = async () => {
  const categories: string[] = await getCategories();

  const paths = categories.map((category) => {
    return {
        params: { category },
    }
  })
  return { paths, fallback: true } //falback: true renders ErrorBoundary page
}
 
export const getStaticProps: GetStaticProps<CategoryProps, CategoryParams> = (async (context: GetStaticPropsContext) => {
  const { category } = context.params as CategoryParams;

  const categoryProducts: ProductData[] = await getCategoryProducts(category);
  return { props: { categoryProducts } }
}) satisfies GetStaticProps<{
  categoryProducts: ProductData[]
}>
