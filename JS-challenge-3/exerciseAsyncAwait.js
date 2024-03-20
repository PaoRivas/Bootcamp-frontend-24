import fetch from "node-fetch";
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    const jsRes = response.json();
    return jsRes;
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser(name) {
  //let name = prompt("Enter a name?", "vanimar");
  try {
    const user = await loadJson(`https://api.github.com/users/${name}`);
    console.log(`Full name: ${user.name}.`);
    return user;
  } catch (err) {
    if (err instanceof HttpError && err.response.status == 404) {
      console.log("No such user, please reenter.");
      return demoGithubUser();
    } else {
      throw err;
    }
  }
}
(async () => {
  await demoGithubUser("vanimay");
})();
