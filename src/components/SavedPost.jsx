import { useSelector } from "react-redux";
import classes from "./SavedPosts.module.css";
import PostCard from "./PostCard";
import useProtectedRoute from "../hooks/useProtectedRoute";
import nothing from '../assets/nothing.webp';

const SavedPost = () => {
  const savedPosts = useSelector((state) => state.savedPost.posts);

  const userInfo = useProtectedRoute();

  return savedPosts.length !== 0 ? (
    <div className={classes.savedpost}>
      {savedPosts.map((post) => {
        return <PostCard key={post.id} id={post.id} caption={post.caption} preview={post.preview}/>;
      })}
    </div>
  ) : (
    <div className={classes.empty}>
        <img src={nothing} alt="nothing" />
        <h2>No Saved Posts</h2>
    </div>
  );
};

export default SavedPost;
