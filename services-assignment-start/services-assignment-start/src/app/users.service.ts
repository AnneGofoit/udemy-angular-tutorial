export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  setToInactive(id: number){
    this.inactiveUsers.push(this.activeUsers.splice(id, 1)[0]);
  }

  setToActive(id: number){
    this.activeUsers.push(this.inactiveUsers.splice(id, 1)[0]);
  }

}