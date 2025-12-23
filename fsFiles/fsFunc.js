import fs from "fs/promises"

async function readFile(path) {
    const readFile = await fs.readFile(path, "utf-8")
    const getFile = JSON.parse(readFile)
    return getFile
}

async function writeFile(path, data) {
    const writeFile = await fs.writeFile(path, data)
    const writedFile = JSON.stringify(writeFile)
    return writedFile
}

export default {
    readFile,
    writeFile
}