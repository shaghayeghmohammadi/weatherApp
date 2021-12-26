// api.openweathermap.org/data/2.5/weather?q={city name}&appid=37a942e2e80b1b9977ef4f05edbacafc&units=metric

const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = "37a942e2e80b1b9977ef4f05edbacafc";

form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            const {main, name, sys, weather} = data;
            const icon= `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAuNDIyIDExLjUxNmMtLjE2OS0zLjA3My0yLjc1LTUuNTE2LTUuOTIyLTUuNTE2LTEuMjI5IDAtMi4zNjguMzctMy4zMTMuOTk5LTEuMDQxLTEuNzktMi45NzQtMi45OTktNS4xOS0yLjk5OS0uNDY4IDAtLjk0Ny4wNTQtMS40MzQuMTY3IDEuMzQ3IDMuODMzLS4zODMgNi40MTYtNC41NjMgNS44MTItLjAwNiAzLjAyNyAyLjE5NyA1LjQ2OCA1LjAyIDUuOTM1LjEwNCAyLjI3MSAxLjk5NiA0LjA4NiA0LjMzNCA0LjA4NmgxMC4yOTFjMi40MDYgMCA0LjM1NS0xLjkxNiA0LjM1NS00LjI3OCAwLTIuMTAxLTEuNTQ1LTMuODQ3LTMuNTc4LTQuMjA2em0tMTUuMDE2IDIuNDM5Yy0xLjI4NS0uMTkyLTIuMzg0LS45OTctMi45NjQtMi4xMjUgMi45MTYtLjExOSA1LjA2My0yLjg0NiA0LjQ1MS01LjcyOSAxLjI1OS4yOSAyLjI4MiAxLjE4IDIuNzc4IDIuMzQ2LS42MzUuODc1LTEuMDMxIDEuOTI4LTEuMDk0IDMuMDY5LTEuNDE5LjI1MS0yLjU4OCAxLjE4Ni0zLjE3MSAyLjQzOXptMTQuMjQgNC4wNDVoLTEwLjI5MmMtMS4yOTcgMC0yLjM1NC0xLjAyMi0yLjM1NC0yLjI3OCAwLTIuMTE4IDIuMTA0LTIuNTk3IDMuNDg4LTIuNTEyLS4wNS0xLjM1Ni4xMzctNS4yMSA0LjAxMi01LjIxIDMuNzcxIDAgNC4yMjkgMy43NzEgNC4wMTIgNS4yMDkgMS41MDktLjEwNSAzLjQ4OC40MzcgMy40ODggMi41MTMgMCAxLjI1Ni0xLjA1NyAyLjI3OC0yLjM1NCAyLjI3OHoiLz48L3N2Zz4=`
            const li = document.createElement("li");
            li.classList.add("city");
            const markup = `
            <h2 class='city-name' data-name=${name}, ${sys.country}>
                <span>${name}</span>
                <span>${sys.country}</span>
            </h2>
            <div class='city-temp'>${Math.round(main.temp)}</div>
            <figure>
                <img class='city-icon' src='${icon}' alt='city'>
                <figurecaption>${weather[0]["description"]}</figurecaption>
            </figure>

            
            `;  

            li.innerHTML = markup;
            list.appendChild(li);
            msg.innerText = "";
        })
        .catch(() => {
            msg.innerText= "Search for a valid city :)"
        })

        input.value = "";
})