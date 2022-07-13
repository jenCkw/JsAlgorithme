class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let firstEpisode = new Episode("Blalabla", "Got", 30);
let secondEpisode = new Episode("secondeBlablabla", "Naruto", 20);
let thirdEpisode = new Episode("thirdBlablabla", "Attack on titan", 45);

console.log(firstEpisode);
console.log(secondEpisode);
console.log(thirdEpisode);
