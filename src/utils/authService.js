

export const authLogin =  async(email, password) => {
    return fetch('https://ingles.appdevelopmentapis.site/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })
    .then((response) => {
        if(!response.ok) {
            return response.json()
        }
        return response.json()
    })
    .then((responseJson) => {
        return responseJson
    }).catch((error)=>{
        return error
      }) 
    }

export const authRegister =  async(name, email, password) => {
    return fetch('https://ingles.appdevelopmentapis.site/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            password,
        }),
    })
    .then((response) => {
        return response.json()
    })
    .then((responseJson) => {
        return responseJson
    }).catch((error)=>{
       return error
      })  
}

export const validateToken = async (token) => {
    return fetch('https://ingles.appdevelopmentapis.site/auth/token/validate', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json', // Mejor usar Accept para indicar que quieres respuesta en JSON
        },
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); 
    })
    .catch((error) => {
        throw error;
    });
};

export const downloadFileSound = async (url, id) => {
    return fetch(`${url}/sound/${id}`)
        .then((response) => {
          if(!response.ok) {
            return response.json()
          }
          return response.json()
        })
        .then((responseJson)=>{
          const base64Data = responseJson.data[0].file_content_base64
          const audioDataUrl = `data:audio/mp3;base64,${base64Data}`
          return audioDataUrl
        })
        .catch((error)=>{
          return error
        })    
}

export const downloadFileImg = async (url, id) => {
    return fetch(`${url}/img/${id}`)
        .then((response) => {
          if(!response.ok) {
            return response.json()
          }
          return response.json()
        })
        .then((responseJson)=>{
          const base64Data = responseJson.data[0].file_content_base64
          const imgDataUrl = `data:image/png;base64,${base64Data}`
          return imgDataUrl
        })
        .catch((error)=>{
          return error
        })    
}

export const validateCode = async (email, code) => {
    return fetch('https://ingles.appdevelopmentapis.site/auth/verification',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email:email,
            code:code,
        })
    })
    .then(
        (response) => {
           return response.json()
        }
    )
    .catch((error)=>{
        return error
    })


}