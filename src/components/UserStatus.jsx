const UserStatus = ({isLoggedIn,isAdmin}) => {
  return (
    <div>
        
        <h1>Welcome {isLoggedIn && isAdmin ? ("Admin"):("User")}</h1>
    </div>
  )
}

export default UserStatus