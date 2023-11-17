import { useDisclosure } from '@mantine/hooks';
import CreatePost from './CreatePost';
import classes from './Header.module.css';
import { Button,Tooltip,ActionIcon } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CgAddR } from "react-icons/cg";
import { MdBookmark } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { logoutUser } from '../redux/Slices/authSlice';


const Header = () =>{
 
    const [opened, { open, close }] = useDisclosure(false);
    
    const navigate = useNavigate()

    const handleNavigateSaved = () =>{
        navigate("/SavedPost")
    }

    const handleNavigateHome = () =>{
        navigate("/")
    }

    const userInfo = useSelector(state => state.auth.user);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
    }

    return (
        <div className={classes.header}>
            <div className={classes.title} onClick={handleNavigateHome}>Instagram</div>
            <div className={classes.create_post}>
            {opened && 
                <CreatePost opened={opened} close={close}/>
            }
            </div>
            <div className={classes.btns}>
                <Tooltip label={'Saved Post'}>
                    <ActionIcon variant='outline' color='teal' onClick={handleNavigateSaved}>
                        <MdBookmark />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label={'Create Post'}>
                    <ActionIcon variant='outline' color='cyan' onClick={open}>
                        <CgAddR />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label={'Logout'}>
                    <ActionIcon variant='outline' color='red' onClick={handleLogout}>
                        <FiLogOut />
                    </ActionIcon>
                </Tooltip>
            </div>

            <div className={classes.logo}>
                <img src={userInfo?.picture} alt="logo" />
            </div>
        </div>
    )
}

export default Header