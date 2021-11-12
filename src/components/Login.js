import { GoogleLogin } from 'react-google-login';

const Login = ({ setUser }) => {

  const onSuccess = async (res) => {
    console.log(res.profileObj.name)
    let newUser = {
      name: res.profileObj.name
    }
    localStorage.setItem('user', JSON.stringify(newUser))
    setUser(newUser)
  }

  const onFail = (res) => {
    console.log(res)
  }

  return (
    <div className='h-screen flex items-center justify-center'>

      <GoogleLogin
        clientId="974778876184-h91l56jvpa9fvf9n0e89fp00osp6g1sq.apps.googleusercontent.com"
        render={renderProps => (
          <button className='bg-gray-300 px-2 border-black border-2' onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
        )}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFail}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default Login
