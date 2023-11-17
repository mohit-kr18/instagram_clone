import { useDispatch, useSelector } from 'react-redux';
import classes from './PostCard.module.css'
import { toggleLike } from '../redux/Slices/likedPostSlice';
import { toggleSave } from '../redux/Slices/savedPostSlice';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { FaBookmark, FaRegBookmark,FaRegComment } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';

const PostCard = ({id,preview,caption}) => {

    const dispatch = useDispatch();
    

    const handleLike = (id) =>{
        dispatch(toggleLike(id));
    }

    // const handleSave = (id) =>{
    //     dispatch(toggleSave(id));
    // }
    
    const likedPosts = useSelector(state => state.likedPost.posts);

    const isLiked = likedPosts.find(likedId => likedId === id) !== undefined;

    // const savedPosts = useSelector(state => state.savedPost.posts);

    // const isSaved = savedPosts.find(savedId => savedId === id) !== undefined;
    // console.log(isSaved);

    const handleToggle = () => {
        dispatch(toggleSave({id,preview,caption}));
      };
    
      const savedPosts = useSelector(state=>state.savedPost.posts);  
      
      const isPresent = () => {
        return savedPosts.find(q => q.id === id) !== undefined;
      }

    return (
        <div className={classes.postcard}>
            <div className={classes.photo} >
                <img src={preview} alt="" />
            </div>
            <div>{caption}</div>  
            <div className={classes.features}>
            <div className={classes.like_comment_share}>
                {isLiked? <IoMdHeart onClick={()=>handleLike(id)} size={20} color='red'/>:
                    <IoMdHeartEmpty onClick={()=>handleLike(id)}  size={20}/>
                }
                <FaRegComment size={20} />
                <FiShare2 size={20}/>
            </div>
            <div className={classes.save}>
                <button onClick={handleToggle}>
                    {isPresent() ? <FaBookmark/> : <FaRegBookmark />}
                </button>
            </div>
            </div>
            
            <input type="text" placeholder='Add a comment'className={classes.comment}/>
          
        </div>
    )
}


export default PostCard;