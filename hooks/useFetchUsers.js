import { useEffect, useState } from 'react'
const useFetchUsers = () => {
  const [nameEmail, setNameEmail] = useState('')
  const [allUsers, setAllUsers] = useState([]) // Store ALL 50 users
  const [displayedUsers, setDisplayedUsers] = useState([]) // Store 10 Users
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState(null)

  const USERS_PER_BATCH = 10 // Show 10 users at a time

  useEffect(()=>{
  
      const handleFetchUsers = async () => {
          setLoading(true)
        try {
  
            const responce = await fetch('https://randomuser.me/api/?results=50&page=1')
  
            if(!responce.ok){
              throw new Error('Something Went Wrong')
            }
  
            const userData = await responce.json()
            setAllUsers(userData.results)
            setDisplayedUsers(userData.results.slice(0, USERS_PER_BATCH))
  
        } catch (error) {
            console.error(error.message)
            setError(error.message)
        } finally{
          setLoading(false)
        }
      }    
  
      handleFetchUsers()
    },[])

    const loadMoreUsers = () => {
    if(loadingMore) return 

    const currentUsers = displayedUsers.length
    const remainingUsers = allUsers.length - currentUsers

    if(remainingUsers <= 0) return

    setLoadingMore(true)

    setTimeout(()=>{
      const nextUsers = currentUsers + USERS_PER_BATCH
      const newBatch = allUsers.slice(currentUsers,nextUsers)
      if (newBatch.length > 0) {
        setDisplayedUsers(pre => [...pre, ...newBatch])
      }
      setLoadingMore(false)
    },1000)
  }

  const handleSetNameEmail = (text) => {
        setNameEmail(text)
  }
  
  return { displayedUsers, 
           loading,
           loadingMore,
           nameEmail,
           handleSetNameEmail, 
           loadMoreUsers}
}

export default useFetchUsers