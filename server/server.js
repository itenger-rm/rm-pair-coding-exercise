const express = require('express');
const cors = require('cors')
const fs = require('fs');

const app = express();
const port = 8008;

app.use(cors());

app.use(express.json());

const appInfo = {
  name: 'rm-pairing-exercise'
};

const database = {}

app.post('/execute', (req, res) => {
  console.log('execute', req.body)

  if (database[req.body.taskId] === 'execution') {
    return res.status(409).end()
  }
  
  database[req.body.taskId] = 'execution'
  setTimeout(() => {
    database[req.body.taskId] = 'result'
  }, 5000)

  res.json(req.body);
})

app.get('/executionStatus', (req, res) => {
  res.json({
    status: database[req.query.taskId]
  })
});

function createConfusionMatrix(counter, classNames){
  const precisions = [];
  const recalls = [];
  // TODO return all necessary data for the FE to display a confusion matrix
  // - calculate precision and recall values

  for (let i = 0; i < counter.length; i++) {
    const colTotal = counter[i].reduce((res, val) => res+val, 0)
    recalls.push(counter[i][i]/colTotal)
    
    const rowTotal = counter.reduce((res, val) => res+val[i], 0)
    precisions.push(counter[i][i]/rowTotal)
  }

  return {precisions, recalls, counter, classNames};
}

app.get('/executionResult', (req, res) => {
  const rawdata = fs.readFileSync('./data/classification.json');
  const perfData = JSON.parse(rawdata);
  const {counter, classNames} = perfData.averagesList[0];
  const confusionMatrix = createConfusionMatrix(counter, classNames);
  res.json(confusionMatrix);
});

app.listen(port, () => {
  console.log(`rm-pair-coding-exericse-server listening at http://localhost:${port}`)
})