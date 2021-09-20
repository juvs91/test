module.exports = class AbstractModel {
  async get({_id, _filters}){
    throw new Error('implement me pls')
  }
  async create(_data){
    throw new Error('implement me pls')
  }
  async update(_data){
    throw new Error('implement me pls')
  }
  async delete(_id){
    throw new Error('implement me pls')
  }
}