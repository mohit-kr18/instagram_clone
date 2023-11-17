import { useDisclosure } from '@mantine/hooks';
import CreatePost from './CreatePost';
import classes from './Header.module.css';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';


const Header = () =>{
 
    const [opened, { open, close }] = useDisclosure(false);
    
    const navigate = useNavigate()

    const handleNavigateSaved = () =>{
        navigate("/SavedPost")
    }

    const handleNavigateHome = () =>{
        navigate("/")
    }

    return (
        <div className={classes.header}>
            <div className={classes.title} onClick={handleNavigateHome}>Instagram</div>
            <div className={classes.create_post}>
            {opened && 
                <CreatePost opened={opened} close={close}/>
            }
            <div className={classes.btns}>
                <Button onClick={handleNavigateSaved}>Saved Post</Button>
                <Button onClick={open}>Create Post</Button>
                <Button>Login</Button>
            </div>
            </div>
        </div>
    )
}

export default Header