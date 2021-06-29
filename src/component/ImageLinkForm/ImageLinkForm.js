import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit}) => {
    return (
    <div className='ma4 mt0'>
        <p className='F3'>
            {'This Magic Brain will Detect Faces in your pictures, give it a try :)'}
        </p>
        <div className='Center'>
            <div className='Form Center pa4 br3 shadow-5'>
                <input 
                    className='f4 pa2 w-70 center' type='tex' 
                    onChange={ onInputChange} />
                <button 
                    className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                    onClick={ onButtonSubmit }
                    >Detect :)</button>
            </div>
        </div>
    </div>
    );
}

export default ImageLinkForm;