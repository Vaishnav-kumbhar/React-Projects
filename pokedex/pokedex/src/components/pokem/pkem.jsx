import './pokem.css';
function Pokemon({ name, image }) {
  return (
    <div id='pokemon-wrapper'>
      <div className='name'>{name}</div>
      <div className='pokemon-img'>
        <img className='pokemon-image' src={image} alt="image" />
      </div>
    </div>
  );
}

export default Pokemon;
