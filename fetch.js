
async function load() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    return response.json();
}



document.addEventListener("DOMContentLoaded", async () => {

    try{
      const data = await load();
      const container = document.getElementById('content');

      data.map(user => {
          const title = document.createElement("h1");
          const text = document.createElement("p");

          title.innerText = `Id: ${user.id} \n Title:${user.title}`;
          text.innerText = `UserId: ${user.userId} \n Body:${user.body}`;

          container.appendChild(title);
          container.appendChild(text);




      })
  
    }catch(err){
        console.log(err);
    }
   


});


