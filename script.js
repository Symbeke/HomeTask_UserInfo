
function drawComponents(){
    let users = JSON.parse(localStorage.getItem("items"));
    let list = document.querySelector("#ul");
    
    for(let user of users){
        list.innerHTML += `<li>
        <p>${user.name}</p> 
        <p>Address:${user.address.street}</p> 
        <p>Company:${user.company.name}</p> 
        </li>`;
        
    
    }
}

async function loadData(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let body = await response.json();
     localStorage.setItem("items",JSON.stringify(body))   

    }
loadData().then(()=>drawComponents()) ;



