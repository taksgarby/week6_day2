const Park = function (name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
  }
  


Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function (dinosaur) {
    this.dinosaurs.splice(this.dinosaurs.indexOf(dinosaur), 1)
}

Park.prototype.mostPopularDinosaur = function () {

    let mostPopular = this.dinosaurs[0]

    for (dinosaurIndex in this.dinosaurs) {
        if (this.dinosaurs[dinosaurIndex].guestsAttractedPerDay > mostPopular.guestsAttractedPerDay) {
            mostPopular = this.dinosaurs[dinosaurIndex]
        }        

    }
    return mostPopular;
}

Park.prototype.findDinosaurBySpecies = function (species) {

    let listBySpecies = []

    for (dinosaurIndex in this.dinosaurs) {
        if (this.dinosaurs[dinosaurIndex].species == species){     
            listBySpecies.push(this.dinosaurs[dinosaurIndex])
        }
    }
    return listBySpecies;
}




Park.prototype.visitorPerDay = function () {

    let dinoGuestNumber = 0;

    for (index = 0; index < this.dinosaurs.length;  index ++)  {
        dinoGuestNumber +=   this.dinosaurs[index].guestsAttractedPerDay;  
    }
    return dinoGuestNumber;
}

Park.prototype.visitorPerYear = function () {

    let perDay = this.visitorPerDay();
    return perDay * 365;

}
    

Park.prototype.revenuePerYear = function () {

    let perYear = this.visitorPerYear();
    return perYear * this.ticketPrice;

}




module.exports = Park;
  