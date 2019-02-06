import { useState } from 'react';
import '../../assets/styles/image.scss';

const Image = (props) => {

    return (
        <div id={props.id} className={'image size ' + props.cls}>
            <img className='each-img' src={props.src}></img>
        </div>
    );
}

export default Image;