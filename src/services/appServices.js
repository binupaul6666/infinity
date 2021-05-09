import axios from 'axios';

/**
 * @author Binu Paul    
 * @description Remot call
 */

const localUrl = 'http://localhost:5000/';
const config = {
    headers: { 'content-type': 'application/json' },
}

async function fetchResponse(method, url, requestObjcet = null) {
    const convertObject = JSON.stringify(requestObjcet);
    switch (method) {
        case 'get':
            return await axios
                .get(localUrl + url, config)

        case 'post':
            return await axios
                .post(localUrl + url, { convertObject }, config)
        case 'put':
            return await axios
                .put(localUrl + url, { convertObject }, config)
        case 'delete':
            return await axios
                .delete(localUrl + url, config)
    }
}


export default fetchResponse;