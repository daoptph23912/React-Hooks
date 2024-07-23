const apiUrl = "https://api-gateway.fullstack.edu.vn/api/new-feeds?page=1";
fetch(apiUrl)
  .then((res) => {
    if (!res.ok) {
      throw new Error("llalasl");
    }
    return res.json();
  })
  .then((data) => {})
  .catch((err) => {
    console.log(err);
  });
