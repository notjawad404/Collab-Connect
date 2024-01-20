

export default function UserProfile() {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div>
    <h1>{user && user.email}</h1>
        userProfile
    </div>
  )
}
