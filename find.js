


test()
async function characterCreate(location) {
    const show = document.querySelector("#show")

    let requestURL =
    location;
  const request = new Request(requestURL);

  const response = await fetch(request);
  const details = await response.json();

  console.log(details)


//Creating the show thing
let Base = document.createElement('dif')
Base.setAttribute('id','char' + details.id)
Base.classList.add('character')
show.appendChild(Base)

let Name = document.createElement('dif')
Name.textContent = details.name + '(' + details.pronouns + ')'
Base.appendChild(Name)

Base.appendChild(document.createElement('br'))

let Age = document.createElement('dif')
Age.textContent = 'Age: ' + details.age
Base.appendChild(Age)

//sprites
details.sprites.forEach(sprite => {
if(sprite.search(/main.png/gm) != -1) {
    let Image = document.createElement('img')
    Image.setAttribute('alt', "Image couldn't be found")
    Image.setAttribute('src', sprite)
    Base.appendChild(Image)
}

});
}


async function test() {
    const requestURL =
    "http://192.168.178.28/the%20achive/links.json";
    console.log(requestURL)
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const locations = await response.json();
  
    locations.characters.forEach(link => {
      characterCreate(link)
    });
  }
  