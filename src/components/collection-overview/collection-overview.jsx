import React from 'react';
import './collections-overview.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selector';
const CollectionOverview = ({collections}) => (
    Object.keys(collections).map( key => (
        <div className='collections-overview'>
           <CollectionPreview key={collections[key].id} {...collections[key]} />
        </div>
    ))
)
const mapStatetoProps = createStructuredSelector({
    collections: selectCollections
  })
export default connect(mapStatetoProps)(CollectionOverview);