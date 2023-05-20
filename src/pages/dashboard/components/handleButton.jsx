const handleIsButtonDisable = (user) => {
    const someNullOrZero = Object.values(user).some(value => value === null || parseInt(value) <= 0 || value === "");
    return someNullOrZero
}
export { handleIsButtonDisable }