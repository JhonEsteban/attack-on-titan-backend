import { Army } from '../models';
import { armys } from '../mock';

class ArmyService {
  private armys: Army[];

  constructor() {
    this.armys = armys;
  }

  public getAllArmys(): Army[] {
    return this.armys;
  }

  public getArmyById(id: string): Army[] {
    return this.armys.filter((army) => army.id === id);
  }
}

export default ArmyService;
