export const fetchPhrasesAll = async (token) => {
  try {
    const response = await fetch(
      "https://ingles.appdevelopmentapis.site/phrases/all",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const phrasesCreate = async (token, phrase) => {
  return fetch("https://ingles.appdevelopmentapis.site/phrases/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      phrase: phrase,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      return response.json();
    })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.log("Mistake error",error);
    });
};

export const downloadFileSoundUser = async (url, id,jwt) => {
  return fetch(`${url}/sound/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Mistake");
      }
      return response.json();
    })
    .then((responseJson) => {
      const base64Data = responseJson.data.file_content_base64;
      const audioDataUrl = `data:audio/mp3;base64,${base64Data}`;
      return audioDataUrl;
    })
    .catch((error) => {
      console.log("Mistake error");
    });
};

export const downloadFileImgUser = async (url, id,jwt) => {
  return fetch(`${url}/img/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Mistake");
      }
      return response.json();
    })
    .then((responseJson) => {
      const base64Data = responseJson.data.file_content_base64;
      const imgDataUrl = `data:image/png;base64,${base64Data}`;
      return imgDataUrl;
    })
    .catch((error) => {
      console.log("Mistake error",error);
    });
};