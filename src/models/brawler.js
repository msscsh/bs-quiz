function Brawler(_id, name, rarity, type, attack, health) {
    this._id = _id;
    this.name = name;
    this.rarity = rarity;
    this.type = type;
    this.attack = attack;
    this.health = health;
}

module.exports = new Brawler();