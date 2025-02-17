import { PropTypes } from "prop-types";
import { GifItem } from './index';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading} = useFetchGifs( category )
    

  return (
    <>
        <h3>{ category }</h3>

        {
          isLoading && ( <h2>cargando...</h2> )
        }

        <div className='card-grid'>
          {
            images.map( ( image ) => (

              <GifItem 
                key={ image.id }
                { ...image }
              />
            ) )
          }
        </div>
        
    </>
  )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequiered
};