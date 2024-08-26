import React from 'react';
import { BigTitle, CategoryLink, ColumnLayout } from '../app/styles/styles';
import { getCategories } from '@/app/common/api';

const Main = ({categories}) => {
	return (
    <ColumnLayout>
			<span className="material-symbols-outlined">shopping_basket</span>
			<BigTitle>All product categories:</BigTitle>
			{categories?.map( (el: any) => <CategoryLink href={`/categories/${el}`} key={el}>{el}</CategoryLink>)}
    </ColumnLayout>
  )
};

export default Main


export async function getStaticProps() {
	try {
		const categories: string[] = await getCategories();
		return {
			props: {
				categories,
			},
		}
  } catch (error) {
		return {
			props: {categories: null},
		};
	}
}
