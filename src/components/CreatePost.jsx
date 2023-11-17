import { Modal, Button, Textarea, FileButton } from '@mantine/core';
import { useState } from 'react';
import { MdCloudUpload } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { createPost } from '../redux/Slices/postSlice';
import classes from './CreatePost.module.css';

const CreatePost = ({opened,close}) => {
    const [preview, setPreview] = useState(null);
    const [caption,setCaption] = useState("")
    
    const dispatch = useDispatch();

    const handleUpload = (file) => {
        const url = URL.createObjectURL(file);
        setPreview(url);
    }

    const generateId = () => {
        return Math.random().toString(36)
    }

    const handleSubmit = () => {
        const id = generateId();
        dispatch(createPost({id,preview,caption}))
        close();
    }

    return (
        <Modal opened={opened} onClose={close} >
        <div className={classes.create_post}>
            <div className={classes.browse_photo}>
            {preview && <img className={classes.browse_img} src={preview} alt="" />}
                <FileButton onChange={handleUpload} accept="image/png,image/jpeg">
                    {(props)=><Button {...props} leftSection={<MdCloudUpload/>}>Browse Photo</Button>}
                </FileButton>
            </div>
            <Textarea name="" id="" placeholder='write captions here' value={caption} onChange={(e)=>setCaption(e.target.value)} cols="10" rows="5"></Textarea>
            <Button onClick={handleSubmit}>Post</Button>
        </div>
        </Modal>
    )
}

export default CreatePost