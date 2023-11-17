import classes from './Login.module.css'
import {useNavigate} from 'react-router-dom'


const Login = () =>{

   const navigate=useNavigate()  

   const handleNavigate = () =>{
       navigate('/')
   }
   return (
    <div className={classes.login}>
         <h1 className={classes.heading}>Instagram</h1>
         <div className={classes.username}>
                <input className={classes.input} type="text" placeholder='Type your username' />
         </div>  
         <div className={classes.password}>
                <input className={classes.input} type="password" placeholder='Type your password' />
         </div>
         <button onClick={handleNavigate} className={classes.btn}>Login</button>
         <div className={classes.forget}>
            <p>Forget password?</p>
         </div>  
         <div className={classes.other_method}>
            <p>or SignUp Using</p>
         </div>   
    </div>
   )
}

export default Login;