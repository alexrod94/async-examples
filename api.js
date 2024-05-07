if (password) {
  resolve("Esta es tu información");
} else {
  throw Error("Falta la contraseña");
}
