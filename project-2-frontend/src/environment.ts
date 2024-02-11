const devEnvironment = {
  projectBaseUrl: "http://localhost:2525"
};

const prodEnvironment = {
  projectBaseUrl: "http://dbwildcards.cjxkscd0i7zp.us-east-1.rds.amazonaws.com"
};

export let environment = devEnvironment;

if (process.env.REACT_APP_ENV === "production") {
  environment = prodEnvironment;
}
