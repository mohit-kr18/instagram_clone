import { Modal, Button, Textarea, TextInput } from '@mantine/core';
import { useState } from 'react';
import { MdCloudUpload } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { createPost } from '../redux/Slices/postSlice';
import classes from './CreatePost.module.css';

const CreatePost = ({opened,close}) => {
    const [imgUrl, setImgUrl] = useState("");
    const [caption,setCaption] = useState("")
    
    const dispatch = useDispatch();

    const generateId = () => {
        return Math.random().toString(36)
    }

    const handleSubmit = () => {
        if(!imgUrl){
            alert("Please upload a photo");
            return;
        }
        const id = generateId();
        dispatch(createPost({id,preview:imgUrl,caption}))
        close();
    }


    return (
        <Modal opened={opened} onClose={close} >
        <div className={classes.create_post}>
            <div className={classes.browse_photo}>
            {imgUrl.length !== 0 && <img className={classes.browse_img} src={imgUrl} alt="" />}
                {/* <FileButton onChange={handleUpload} accept="image/png,image/jpeg">
                    {(props)=><Button {...props} leftSection={<MdCloudUpload/>}>Browse Photo</Button>}
                </FileButton> */}
                <TextInput value={imgUrl} onChange={(e)=>setImgUrl(e.target.value)} placeholder='Enter Image Url'/>
            </div>
            <Textarea name="" id="" placeholder='write captions here' value={caption} onChange={(e)=>setCaption(e.target.value)} cols="10" rows="5"></Textarea>
            <Button onClick={handleSubmit}>Post</Button>
        </div>
        </Modal>
    )
}

export default CreatePost