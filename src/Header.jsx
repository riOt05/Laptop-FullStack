import './Header.css';
import User from './User'


export default function Header({ isLogin, setIsLogin, user }) {

    const invalid = ['/login','/frpass1', '/frpass2','/','sign-up']
    console.log(user)

    return (
        <div className='header-wrapper'>
            <div className='header'>
                <h1>Laptop Retailer's Management System</h1>
                {
                    !(invalid.includes(window.location.pathname.toLowerCase())) &&
                    <div className="user-account">
                        {
                            isLogin && <div className="username">{ user.username }</div>
                        }
                        <User />
                    </div>
                }
            </div>
        </div>
    );
}