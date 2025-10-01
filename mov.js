const url = "https://www.fluttermovie.top/api/Movies";
const cont = document.querySelector('.container');
let search = document.querySelector('.search');
let serbtn = document.querySelector('#ser-btn');

const geet = async () => {
    console.log("getting data...");
    let repo = await fetch(url);
    let da = await repo.json();
    let dt = da.data;
    console.log(dt);

    // 🔑 Search function
    function searchMovie() {
        cont.innerHTML = ""; // clear old results

        let movie = dt.find(m => m.name.toLowerCase() === search.value.toLowerCase());

        if (movie) {
            let box = document.createElement('div');
            box.classList.add('box');
            cont.appendChild(box);

            let imgdiv = document.createElement('div');
            imgdiv.classList.add('img_div');
            box.appendChild(imgdiv);

            let img = document.createElement('img');
            img.classList.add('mov_img');
            img.src = "https://image.tmdb.org/t/p/w500" + movie.photourl;
            img.alt = movie.id;
            imgdiv.appendChild(img);

            let info = document.createElement('div');
            info.classList.add('info');
            box.appendChild(info);

            let title = document.createElement('h2');
            title.classList.add('title');
            title.innerHTML = movie.name;
            info.appendChild(title);

            let relese = document.createElement('span');
            relese.classList.add('year');
            relese.innerHTML = movie.releaseDate || "N/A";
            info.appendChild(relese);

            let dis = document.createElement('span');
            dis.classList.add('plot');
            dis.innerHTML = movie.overwatch || "No description available.";
            info.appendChild(dis);

        } else {
            cont.innerHTML = "<p>No movie found!</p>";
        }

        search.value = ""; // clear input
    }

    // 🔑 Event for button click
    serbtn.addEventListener('click', searchMovie);

    // 🔑 Event for Enter key inside search input
    search.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // stops form submit if inside a form
            searchMovie();
        }
    });
};

geet();
