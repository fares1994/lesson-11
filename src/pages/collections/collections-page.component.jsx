import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
const CollectionsPage = ({match,collection}) =>{
  console.log(collection) 
   return(
    <div className='collection-page'>
       <h2 className='title'>{collection.title}</h2>
            <div className='items'>
            {collection.items.map(item=>
              <CollectionItem key={item.id} item={item} className='collection-item' />
            )}
            </div>
    </div>
)}
const mapStatetoProps = (state,ownProps)=>({
    collection: selectCollection(ownProps.match.params.collectionid)(state)
})
export default connect(mapStatetoProps)(CollectionsPage);
//  <h2>{collections[1].title}</h2>
// <CollectionItem item={collections[1].items[1]}/>

/* <Route path={`${match.path}`} component={}/> */
