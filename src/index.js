function displayPoem(response) {
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  
  function generatePoem(event) {
    event.preventDefault();
    let instruction= document.querySelector("#instruction")
  let apiKey = "2abt3d4e02aa5e6116ef006dbocad3a0";
  let prompt=`generate a poem about ${"instruction.value"}`;
  let context="you are a romantic poem expert and love to write short poems. Please write good and different sweet poems at every click. Your mission is to write 4 lines of poem, each line should be separated by <br> make sure to folow the user instruction";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
  let poemElement = document.querySelector("#poem");
  
  poemElement.innerHTML= `<div class = "generating">⌛generating a poem...</div>`;
  axios.get(apiUrl).then(displayPoem);
  
  }
  let poemFormElement = document.querySelector("#form-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);