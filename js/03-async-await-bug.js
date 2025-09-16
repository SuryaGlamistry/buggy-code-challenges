async function fetchData() {
  try {
    let data = fetch("https://jsonplaceholder.typicode.com/todos/1");
    let result = await data.json();
    console.log(result);
  } catch (err) {
    console.error("Error:", err);
  }
}
fetchData();
