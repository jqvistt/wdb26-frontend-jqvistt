addEventListener("DOMContentLoaded", (event) => { 


getMyIP();
getRooms();

})


async function getMyIP(){

    const apiUrl = "https://jqvistt-rahti-demo-git-jockesprojekt.2.rahtiapp.fi/api/ip";
    const res = await fetch(apiUrl);
    const data = await res.json();

    document.getElementById("ip").textContent = data.client_ip;

}

async function getRooms(){

    const apiUrl = "https://jqvistt-rahti-demo-git-jockesprojekt.2.rahtiapp.fi/api/rooms";
    const res = await fetch(apiUrl);
    const data = await res.json();

    const roomsList = document.getElementById("rooms");
    data.rooms.forEach(room => {
        const li = document.createElement("li");
        li.textContent = `${room.room_number} - ${room.type} - ${room.price}€`;
        roomsList.appendChild(li);
    });

}