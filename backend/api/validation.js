module.exports = app => {

    const existsOrError = (value, msg) => {
        if (!value) throw msg
        if (Array.isArray(value) && value.length === 0) throw msg
        if (typeof value === `string` && !value.trim()) throw msg
    }


    const notExistsError = (value, msg) => {
        try {
            existsOrError(value, msg)
        } catch (msg) {
            return
        }
        throw msg
    }


    function esqualsOrError(valueA, valueB, msg) {
        if (valueA !== valueB) throw msg
    }
    return { existsOrError, notExistsError, esqualsOrError }
}