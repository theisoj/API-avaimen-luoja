import crypto from "crypto"

const generateApiKey = () => {
    const apiKey = crypto.randomUUID()
    return apiKey
}
export default generateApiKey
