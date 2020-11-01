import React from 'react';
import  CollectionOverview from '../../components/collection-overview/collection-overview'
import { Route } from 'react-router-dom';
import  CollectionsPage  from '../../pages/collections/collections-page.component';
const ShopPage = ({match}) => {
  return(
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview}/>
    <Route path={`${match.path}/:collectionid`} component={CollectionsPage}/>
  </div>
)}

export default ShopPage;
