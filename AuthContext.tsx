let isAuthenticated = false;

export const login = () => {
  isAuthenticated = true;
  console.log(isAuthenticated)
};

export const logout = () => {
  isAuthenticated = false;
};

export const isAuthed = () => {
  return isAuthenticated;
};

export const getIsAuthenticated = () => {
  return isAuthenticated;
};