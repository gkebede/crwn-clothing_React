import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectorDictionarySections} from '../../redux/directory/directory.selecors'

import MenuItem from '../../components/menu-item/menu-item.component';
import './directory.style.scss';


const Directory = ({sections}) => {
        return (
          <div className="directory-menu">
            
            
            {sections.map(({id, ...otherSectionProps}) => 
            // {} ->object literal and 
            // return -> key are removed <=> since we use => and ()
                  (
                    // <MenuItem key={id} title={title} size={size} imageUrl={imageUrl}/>
                      <MenuItem key={id} {...otherSectionProps}/>
                  )
            )}
          </div>
      );
            
}

const mapStateToProps = createStructuredSelector({

    sections: selectorDictionarySections

})


export default connect(mapStateToProps) (Directory);