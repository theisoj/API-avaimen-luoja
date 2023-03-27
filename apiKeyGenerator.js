import crypto from "crypto"

const generateApiKey = () => {
    console.log("\nLuodaan API-avainta...\n")
    const apiKey = crypto.randomUUID()
    console.log(`Tässä on API-avain:\n${apiKey}\n`)
}
export default generateApiKey