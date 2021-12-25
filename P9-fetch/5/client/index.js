window.addEventListener('click', async function(event){
  try{
    let response = await fetch('http://127.0.0.1:8090/list');
    if(!response.ok){
      throw new Error("could not fetch");
    }
    let body = await response.text();
    document.getElementById('content').innerHTML=body;
  } catch(e) {
    alert(e);
  }
});
