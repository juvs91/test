const PORT = 8080
const express = require('express')
// accept req from everywhere
const cors = require('cors')
const EmployeeController = require('./controllers/employeeController.js')
// TODO create model and pass it to EmployeeController constructor
const employeeController = new EmployeeController()
// parse data from req
const app = express()
app.use(cors())
app.use(express.json())
// define enpoints

let processParams = (req) => {
  return Object.assign({}, req.body, req.params, req.query)
}
// localhost:8080/getEmployee/1?name=juve
app.get('/getEmployee/:id', (req, resp) => {
  console.log('params', req.params)
  console.log('query', req.query)
  let params = processParams(req)
  // call controller to get employee
  // employeeController.getEmployee(params).then((employee) => {
  //   resp.send(employee)
  // })

  let employee = {name: "juve"}
  resp.send(params)
})


app.post('/createEmployee', (req, resp) => {
  let dataFromClient = processParams(req)
  resp.send(dataFromClient)
})
app.put('/updatEemployee', (req, resp) => {})
app.patch('/updatPartialEemployee', (req, resp) => {})
app.delete('/deleteEemployee', (req, resp) => {})

app.listen(PORT, () => {
  console.log(`app running listening ${PORT}`)
})



