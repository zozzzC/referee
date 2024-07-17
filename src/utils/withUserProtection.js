//checks if user is authed before allowing them to access a route.

async function withUserProtection(authLevel) {
  try {
    const loggedIn = await axios.get("http://localhost:8080/user", {
      withCredentials: true,
    });
    const user = loggedIn.data;

    //check if user has an admin property
    if (user === null || user == undefined) {
      return false;
    }

    if (user?.admin && authLevel === "admin") {
      return true;
    } else if (authLevel === "admin") {
      return false;
    }

    return true;
  } catch (err) {
    return err.message;
  }
}
