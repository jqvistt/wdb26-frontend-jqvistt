addEventListener("DOMContentLoaded", (event) => { 


getMyIP();


})


async function getMyIP(){

    const apiUrl = "https://jqvistt-rahti-demo-git-jockesprojekt.2.rahtiapp.fi/api/ip";
    const res = await fetch(apiUrl);

}