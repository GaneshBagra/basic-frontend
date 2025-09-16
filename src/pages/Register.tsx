import logo from "../components/HeadSection/logo.png"

const Register = () => {
  return <div className=""><div className='contener d-grid w-100 h-100 justify-content-center'>
      <figure>
        <img className='imgeslogin' src={logo} alt="this is logo of this web pages" />
      <h2 className='text-light'>Play</h2>
      </figure>
      <div className='singupcon'>
        <form action="#">
          <label htmlFor="loginname" className='text-light'>Username<sup>*</sup></label>
          <input className='w-100' id='loginname' placeholder='Enter your user name' type="email" /><br />
          <label htmlFor="loginemail" className='text-light'>Email<sup>*</sup></label>
          <input className='w-100' id='loginemail' placeholder='Enter your email' type="email" /><br />
          <label htmlFor="loginpassword" className='text-light'>Password<sup>*</sup></label>
          <input className='w-100' placeholder='Enter your password' id='loginpassword' type="password" /><br />
          <label htmlFor="loginemail" className='text-light'>Verfiy Password<sup>*</sup></label>
          <input className='w-100' id='loginemail' placeholder='Re-enter your password' type="email" /><br />
          <button className='w-100 text-black rounded-0' type='submit'>Sign in with Email</button>
        </form>
      </div>

    </div></div>;


};
export default Register;
