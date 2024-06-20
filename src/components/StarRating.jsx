import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useRating from '../hooks/useRating';


function StarRating() {
   const {filled , onRatingClick , onMouseEnter , onMouseLeave} = useRating()
  return (
    <div style={{
        display:'flex',
        flexDirection:'row',
        gap:'16px'
    }}>
        {
            Array.from({length : 5}).map((_,index)=>(
                <span onClick = {()=> onRatingClick(index)} onMouseEnter = {() => onMouseEnter(index)} onMouseLeave = {()=> onMouseLeave(index)}>
                   {filled(index) ?<FavoriteIcon fontSize='inherit'  /> : <FavoriteBorderIcon fontSize='inherit' /> }
                </span>
              
            ))
        }
    </div>
  )
}

export default StarRating