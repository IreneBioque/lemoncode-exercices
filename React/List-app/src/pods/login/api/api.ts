export const login = (
  username: string,
  password: string
): Promise<{ username: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        username === "admin" && password === "test"
          ? { username: "Administrador" }
          : null
      );
    }, 500);
  });
};
