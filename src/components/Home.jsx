import { useDispatch, useSelector } from 'react-redux';
import PostCard from './PostCard';
import classes from './Home.module.css'
import useProtectedRoute from '../hooks/useProtectedRoute';
import { useEffect } from 'react';
import { getPosts } from '../api/post';
import { setPosts } from '../redux/Slices/postSlice';

const Home = () =>{
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchPosts = async () =>{
            const defaultPosts = await getPosts();
            dispatch(setPosts(defaultPosts));
        }
        const savedposts = JSON.parse(localStorage.getItem('posts'));
        if(!savedposts)
            fetchPosts();
    },[])


    const posts = useSelector(state=>state.posts.posts)

    const userInfo = useProtectedRoute();

    
  
    return (
        <div className={classes.container}>
            <div className={classes.greeting}>Welcome {userInfo?.name}</div>
            <div className={classes.posts}>
                {posts && posts.map(post => {
                    return <PostCard key={post.id} id={post.id} caption={post.caption} preview={post.preview}/>
                })}
            </div>
        </div>
    )
}

export default Home