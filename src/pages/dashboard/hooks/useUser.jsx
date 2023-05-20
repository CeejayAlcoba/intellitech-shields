import { useState } from "react"

const useUser = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        age: 0,
    })
    return {
        user,
        setUser
    }
}
export { useUser }
