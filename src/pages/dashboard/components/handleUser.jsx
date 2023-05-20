const handleUserChange = (e, setData) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
}
export { handleUserChange }