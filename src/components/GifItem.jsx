import PropTypes from 'prop-types'

const GifItem = ({id, title, url }) => {
 console.log(id);
 
    return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
GifItem.propTypes = {
    image: PropTypes.object,
}
export default GifItem
