import axios from 'axios'


export const getProperties = async () => {
    return await axios('http://localhost:3001/properties5').then(res => res.data)
}

export const getPropertyByCategory = async () => {
    return await axios('http://localhost:3001/properties').then(res => res.data)
}

export const getSingleProperty = async () => {
    return await axios('http://localhost:3001/properties').then(res => res.data)
}