import classes from './SignUp.module.css'
import {FaRegUser} from 'react-icons/fa'
import {MdOutlineLock} from 'react-icons/md'
import {MdOutlineMailOutline} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import google from '../assets/google.png'

const SignUp = () =>{

   const navigate=useNavigate()  

   const handleNavigate = () =>{
       navigate('/login')
   }
   
   return (
    <div className={classes.signup}>
         <h1 className={classes.heading}>SignUp</h1>
         <div className={classes.username}>
            <div>Name</div>
            <div className={classes.username_sub}>
                <FaRegUser/>
                <input className={classes.input} type="text" placeholder='Type your name' />
            </div>
         </div>
         <div className={classes.email}>
            <p>Email</p>
            <div className={classes.email_sub}>
                <MdOutlineMailOutline/>
                <input className={classes.input} type="email" placeholder='Type your email' />
            </div>
         </div>  
         <div className={classes.password}>
            <p>Password</p>
            <div className={classes.password_sub}>
                <MdOutlineLock/>
                <input className={classes.input} type="password" placeholder='Type your password' />
            </div>
         </div>
         <div className={classes.password}>
            <p>Confirm Password</p>
            <div className={classes.password_sub}>
                <MdOutlineLock/>
                <input className={classes.input} type="password" placeholder='Type your password' />
            </div>
         </div>
         <div className={classes.already}>
            <p>Already have an account?</p><span>Login</span>
         </div>  
         <button onClick={handleNavigate} className={classes.btn}>SignUp</button>
         <div className={classes.other_method}>
            <p>or SignUp Using</p>
            <div className={classes.social_account}>
                <img className={classes.facebook} src={facebook} alt="facebook" />
                <img className={classes.twitter} src={twitter}alt="twitter" />
                <img className={classes.google} src={google} alt="google" />
            </div>
         </div>   
    </div>
   )
}

export default SignUp;