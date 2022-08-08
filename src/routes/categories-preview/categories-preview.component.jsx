import React from 'react';
import { useContext, Fragment } from 'react';

import CategoriesPreview from '../../components/category-preview/category-preview.component';

import { CategoriesContext } from '../../contexts/categories.context';



const CategoryPreview = () => {
  const {categoriesMap} = useContext(CategoriesContext);

  return (
        <Fragment>  
         { Object.keys(categoriesMap).map((title) => {
           const products = categoriesMap[title];
            return( <CategoriesPreview key={title} title={title} products={products}/>
         );
         })} 
    </Fragment>
  );
};

export default CategoryPreview;