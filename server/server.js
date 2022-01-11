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

app.post('/execute', (req, res) => {
  console.log('execute', req.body)
  // TODO
  res.json(req.body);
})

app.get('/executionStatus', (req, res) => {
  // TODO
});

function createConfusionMatrix(counter, classNames){
  const precisions = [];
  const recalls = [];
  const confusionMatrix = {};
  
  // TODO return all necessary data for the FE to display a confusion matrix
  // - calculate precision and recall values 

  return confusionMatrix;
}

app.get('/executionResult', (req, res) => {
  const rawdata = fs.readFileSync('data/classification.json');
  const perfData = JSON.parse(rawdata);
  const {counter, classNames} = perfData.averagesList[0];
  const confusionMatrix = createConfusionMatrix(counter, classNames);
  res.json(confusionMatrix);
});

app.listen(port, () => {
  console.log(`rm-pair-coding-exericse-server listening at http://localhost:${port}`)
})