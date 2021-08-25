let URI = "";

if (process.env.NODE_ENV === "production") {
    URI = "https://bean-store-test123.herokuapp.com";
} else {
    URI = "http://localhost:4000";
}

export default URI;
