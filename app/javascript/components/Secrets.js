const key = localStorage.getItem("token");
console.log(key);

const secrets = {
  token: key
};

export default secrets;
