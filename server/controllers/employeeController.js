module.exports = class EmployeeController{
  /**
   * 
   * @param {id: int, filters: [{string: any}]} params
   */
  constructor(employeeModel) {
    this.employeeModel = employeeModel
  }
  async getEmployee(params) {
    let employee = await this.employeeModel.get(params)
    return employee
    // the same as above but with promises
    // return this.employeeModel.get(params).then((employee) => {
    //   // do whatever you want with employee
    //   return employee
    // })

  }
}