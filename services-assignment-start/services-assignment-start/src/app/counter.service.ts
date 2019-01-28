export class CounterService {
  activeToInactive: number = 0;
  inactiveToActive: number = 0;

  setToInactive() {
    this.activeToInactive++;
    console.log("-------------------------------");
    console.log("activeToInactive: " + this.activeToInactive);
    console.log("inactiveToActive: " + this.inactiveToActive);
    console.log("-------------------------------");
  }

  setToActive() {
    this.inactiveToActive++;
    console.log("-------------------------------");
    console.log("activeToInactive: " + this.activeToInactive);
    console.log("inactiveToActive: " + this.inactiveToActive);
    console.log("-------------------------------");
  }

}