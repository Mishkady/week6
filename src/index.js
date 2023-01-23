   
   //Date format
   let now = new Date();

    let h2 = document.querySelector("h2");

    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let year = now.getFullYear();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];

    let months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
    ];
    let month = months[now.getMonth()];

    h2.innerHTML = `${hours}:${minutes}, ${day} ${date} ${month}, ${year}`;

    //Display city name 

    function search(event) {
        event.preventDefault();
        let searchInput = document.querySelector("#city-input");

        let h1 = document.querySelector("h1");
        h1.innerHTML = `${searchInput.value}`;
    }

    let form = document.querySelector("#city-search");
    form.addEventListener("submit", search);
      
    