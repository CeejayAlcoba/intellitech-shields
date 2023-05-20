import { useEffect } from "react"
import { useUser } from "./useUser"
import { handleIsButtonDisable } from "../components/handleButton"

const useLog = (user) => {
    useEffect(() => {
        console.log(user)
    }, [user])
}

export { useLog }