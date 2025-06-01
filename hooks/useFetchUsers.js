import { useEffect, useState } from 'react'
const useFetchUsers = () => {
  const [nameEmail, setNameEmail] = useState('')
  const [filterUsers, setFilterUsers] = useState([]) //new Work
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
            setFilterUsers(userData.results)
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

    useEffect(()=>{
      if(nameEmail.trim()===''){
        setFilterUsers(allUsers)
        setDisplayedUsers(allUsers.slice(0,USERS_PER_BATCH))
      }
      else {
        const searchLetters = nameEmail.toLocaleLowerCase().trim()
        const filtered = allUsers.filter(user => {
          const userName = user.login?.username?.toLowerCase() || ''
          const firstName = user.name?.first?.toLowerCase() || ''
          const lastName = user.name?.last?.toLowerCase() || ''
          const email = user.email?.toLowerCase() || ''
          const fullName = `${firstName} ${lastName}`.toLowerCase()

          return(
            userName.startsWith(searchLetters) ||
            firstName.startsWith(searchLetters) ||
            lastName.startsWith(searchLetters) ||
            email.startsWith(searchLetters) ||
            fullName.startsWith(searchLetters) 
          )
        })

        setFilterUsers(filtered)
        setDisplayedUsers(filtered.slice(0,USERS_PER_BATCH))
      }
    },[nameEmail,allUsers]) //new Work

    const loadMoreUsers = () => {
    if(loadingMore) return 

    const currentUsers = displayedUsers.length
    const remainingUsers = filterUsers.length - currentUsers

    if(remainingUsers <= 0) return

    setLoadingMore(true)

    setTimeout(()=>{
      const nextUsers = currentUsers + USERS_PER_BATCH
      const newBatch = filterUsers.slice(currentUsers,nextUsers)
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