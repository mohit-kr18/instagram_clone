import { useSelector } from "react-redux";
import classes from "./SavedPosts.module.css";
import PostCard from "./PostCard";

const SavedPost = () => {
  const savedPosts = useSelector((state) => state.savedPost.posts);

  return savedPosts.length !== 0 ? (
    <div className={classes.bookmark}>
      {savedPosts.map((post) => {
        return <PostCard key={post.id} id={post.id} caption={post.caption} preview={post.preview}/>;
      })}
    </div>
  ) : (
    <h1>Saved Posts is empty</h1>
  );
};

export default SavedPost;
