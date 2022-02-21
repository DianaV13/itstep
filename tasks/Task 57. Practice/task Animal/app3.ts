interface CanTakeDamage{
name:string;
HP: number;
XP:number;

TakeDamage(num: number):number;

};


class Hero implements CanTakeDamage{
name:string;
HP: number;
XP:number;
constructor( name: string, HP: number, XP: number){
    this.name = name;
    this.HP = HP;
    this.XP = XP;
}

TakeDamage(num: number):number{
return this.XP + num;
}
IsDead():boolean{
    if (this.HP = 0){
        return true;
    }
}
IsMage():void{
    console.log("Ты стал Магом");
}
IsWarrior():void{
     console.log ( "Ты воин!");
}

Attack(enemy, CanTakeDamage()):void{

}


}
class Mage extends Hero{
spellbook: Spell = [];
mana:number;
}
class Warrior extends Hero{
wearpon:Weapon;
arrowsNumber:number;
}

enum Spell{Fireball, Thurdenbalt};
enum Weapon {Sword, Bow};