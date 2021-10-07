import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

  import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.style.scss';

const CollectionPage = ({collection})  => {
  const {title, items} = collection;
    console.log( {collection})
// const {history, location, cmatch} = props;
//history.push  --&&-- match.params.collectionId(any)  --&&--  location.pathName

    return (
        <div className='collection-page'>
            <h1 className='title'>{title}</h1>

            <div className='items'>
                {
                    items.map((item =>{
                        return <CollectionItem key={item.id} item={item} />
                    }))
                }

            </div>
        </div>
    )
   
}

// This is necessary b/c unlike other selectors, this selector need a part of state--
// --depending onthe URL parameter!

const mapStateToProps = (state, ownProps) => (

     {collection: selectCollection(ownProps.match.params.collectionId)(state)}

)

 export default  connect(mapStateToProps)(CollectionPage);