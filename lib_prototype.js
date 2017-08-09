// Library

function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlist = [];
}

function addPlayList(playlist) {
  this.playlist.push(playlist);
}

Library.prototype.addPlayList = addPlayList;

// Playlist 

function Playlist(name) {
  this.name = name;
  this.tracks = [];
  this.overallRating = 0
  this.totalDuration = 0
}

function avgRating(rating) {
  var total = 0;
  for (var i = 0; i < this.tracks.length; i++) {
    total += this.tracks[i].rating;
    total = total / this.tracks.length
  }
  this.overallRating = total
}

function totalTime() {
  var total = 0;
  for (var i = 0; i < this.tracks.length; i++) {
    total += this.tracks[i].length
  }
  this.totalDuration = total
}

function addTrack(track) {
  this.tracks.push(track)
}

Playlist.prototype.addTrack = addTrack;
Playlist.prototype.avgRating = avgRating;
Playlist.prototype.totalTime = totalTime;

// Track

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

// Run 

var library = new Library('My New Library', 'John');

var p1 = new Playlist('70s Hit Songs');

var t1 = new Track('Dont Stop \'Til You Get Enough', 4, 6)
var t2 = new Track('Ain\' t No Sunshine', 3, 10)
var t3 = new Track('Rich Girl', 2, 9)
var t4 = new Track('Mr. Blue Sky', 4, 6)


p1.addTrack(t1);
p1.addTrack(t2);
p1.addTrack(t3);
p1.addTrack(t4);

p1.avgRating();
p1.totalTime();

library.addPlayList(p1);


console.log(library)
console.log(p1)


// function addPlaylist (){}