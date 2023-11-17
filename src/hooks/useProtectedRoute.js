import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../api/auth";
import { setUserInfo } from "../redux/Slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";



const useProtectedRoute = () => {
    const userInfo = useSelector(state => state.auth.user);
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(()=>{
        if(!token){
            navigate('/login')
        }
        else{
            async function fetchUserInfo(){
                try{
                    const userinfo = await getUserInfo(token);
                    dispatch(setUserInfo(userinfo));
                }
                catch(err){
                    navigate('/login')
                }
            }
            if(!userInfo)
                fetchUserInfo();
        }
    },[token,navigate,dispatch,userInfo])

    return userInfo;
}

export default useProtectedRoute;