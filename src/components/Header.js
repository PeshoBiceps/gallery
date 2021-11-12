const Header = ({ user, signOut }) => {

  return (
    <nav className='bg-gray-400 h-10 flex items-center justify-end px-4'>
      <p className='cursor-pointer' onClick={signOut}>Hello {user.name}</p>
    </nav>
  )
}

export default Header
