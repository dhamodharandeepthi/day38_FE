import instance from "./instance";

// define the authentication service

const authService = {
  signup: async (user) => {
    try {
      console.log("Registering user...");
      const res = await instance.authInstance.post('/users/signup', user);

      console.log(res.data);

      if (res.data) {
        console.log("User regisered successfully");
        return res.data;
      } else {
        console.log("Error registering user");
        return res.data;
      }
    } catch (error) {
      console.log("Error registering user");
      return error;
    }
  },
  signin: async (user) => {
    try {
      console.log("Authenticating user...");
      const res = await instance.authInstance.post("/users/signin", user);

      console.log(res.data);

      if (res.data) {
        console.log("User aunthenticated Sucessfully");

        // store the token in the session storage
        sessionStorage.setItem("token", res.data.token);

        // store the user in the session storage
        sessionStorage.setItem('user', JSON.stringify({
          username: res.data.username,
          name: res.data.name
        }));

        return res.data;
      } else {
        console.log("Error Autenticating user");
        return res.data;
      }
    } catch (error) {
      console.log("Error autenticating user");
      return error;
    }
  }
}
export default authService;
