import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  private _player: Fighter;
  private _enemies: Fighter[] | SimpleFighter[];

  constructor(player: Fighter, enemies: Fighter[] | SimpleFighter[]) {
    super(player);
    this._player = player;
    this._enemies = enemies;
  }

  public fight(): number {
    this._enemies.forEach((enemy) => {
      while (this._player.lifePoints > 0 && enemy.lifePoints > 0) {
        this._player.attack(enemy);
        enemy.attack(this._player);
      }
    });
    return super.fight();
  }
}
