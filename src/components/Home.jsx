import { useSelector } from 'react-redux';
import PostCard from './PostCard';
import classes from './Home.module.css'

const Home = () =>{

    const posts = useSelector(state=>state.posts.posts)
  
    return (
        <div className={classes.container}>
            {posts && posts.map(post => {
                return <PostCard key={post.id} id={post.id} caption={post.caption} preview={post.preview}/>
            })}
        </div>
    )
}

export default Home