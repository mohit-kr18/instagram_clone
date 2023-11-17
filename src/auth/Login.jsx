import classes from './Login.module.css'
import login_img from '../assets/login_img.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '../api/auth';
import { loginUser, setUserInfo } from '../redux/Slices/authSlice';
import { useGoogleLogin } from '@react-oauth/google';
import { useEffect } from 'react';
import google from '../assets/google.svg';

const Login = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const responseMessage = async (response) => {
        dispatch(loginUser({
            token:response.access_token,
        }))
        const userInfo = await getUserInfo(response.access_token);
        dispatch(setUserInfo(userInfo));
        navigate('/');
    };

    const errorMessage = (error) => {
        console.log(error);
    };

    const login = useGoogleLogin({
        onSuccess: responseMessage,
        onError: errorMessage,
    })

    const token = useSelector(state => state.auth.token);
    useEffect(() => {
        async function fetchUserInfo(){
            try{
                const userinfo = await getUserInfo(token);
                dispatch(setUserInfo(userinfo));
                navigate('/');
            }
            catch(err){
                dispatch(logoutUser());
            }
        }
        if(token)
            fetchUserInfo();
    }, [token,dispatch,navigate])

   
   return (
    <div className={classes.login}>
        <div className={classes.login_img}>
            <img src={login_img} alt="" />
        </div>
        <div className={classes.login_details}>
            <h1 className={classes.heading}>Instagram</h1>
            <div className={classes.username}>
                    <input className={classes.input} type="text" placeholder='Type your username' />
            </div>  
            <div className={classes.password}>
                    <input className={classes.input} type="password" placeholder='Type your password' />
            </div>
            <button  className={classes.btn}>Login</button>
            <div className={classes.forget}>
                <p>Forget password?</p>
            </div>  
            <div className={classes.other_method}>
                <p>or</p>
            </div>   
            <div className={classes.oauth}>
                <div className={classes.google} onClick={()=> login()}>
                    <img src={google} alt="google" />
                    <p>Sign in with Google</p>
                </div>
            </div>
            <p className={classes.note}>Use only above method to signup</p>

        </div>
    </div>
   )
}

export default Login;