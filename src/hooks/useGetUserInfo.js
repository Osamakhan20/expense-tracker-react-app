/*export const useGetUserInfo = () => {
  const { name, profilePhoto, isAuth, userID } = JSON.parse(
    localStorage.getItem("auth")
  );
    return { name, profilePhoto, isAuth, userID };
}; */

export const useGetUserInfo = () => {
    let userInfo = {
      name: '',
      profilePhoto: '',
      isAuth: false,
      userID: null,
    };
  
    try {
      const authData = localStorage.getItem("auth");
      if (authData) {
        const parsedData = JSON.parse(authData);
        userInfo = {
          name: parsedData.name || '',
          profilePhoto: parsedData.profilePhoto || '',
          isAuth: parsedData.isAuth || false,
          userID: parsedData.userID || null,
        };
      }
    } catch (error) {
      console.error("Failed to parse auth data from localStorage", error);
    }
  
    return userInfo;
  };
