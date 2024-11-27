export const createPhrasesBrowsers = async (token,phrases) => {
    return fetch("https://ingles.appdevelopmentapis.site/services/free/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"},
        body: JSON.stringify({
          phrase: phrases,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            return response.json();
          }
          return response.json();
        })
        .then((responseJson) => {
          return responseJson;
        })
        .catch((error) => {
          return error;
        });

}