import { useRef, useState } from 'react'
import { Keyboard } from 'react-native'

const useInput = () => {
    const [showCursor, setShowCursor] = useState(false)
    const inputRef = useRef(null)

   
        const handleContainerPress = () => {
            if (inputRef.current) {
              inputRef.current.blur()
            }
            Keyboard.dismiss()
            setShowCursor(false)
          }
        
          const handleInputPress = () => {
            setShowCursor(true)
          }
   
return {
        showCursor,
        inputRef,
        handleContainerPress,
        handleInputPress
    }
}

export default useInput

