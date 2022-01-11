# RapidMiner pair coding exercise

In the skeleton project you already have a frontend and a server component. Each can be started by `npm start` in their folder.

FE is a CRA app, axios and Ant DEsign are already added.

BE is a minimal Express server with 3 endpoints: `POST /execute`, `GET /executionStatus`, `GET /executionResult`

Task 1. Basic execution flow

Execution (e.g. model training) takes time so FE needs to wait until results can be loaded.

* modify `/execute` and `/executionStatus` endpoints so that FE can poll the status until it is complete
* executionStatus should return these values: `execution`, `error`, `result`
* simulate execution with a timer
* modify FE so that it only loads result when status is `complete`

Task 2: Confusion Matrix

* Convert the raw performance data into a confusion matrix consumable by the FE
* display the matrix in an Ant Table - you can see an example screenshot in `conf_matrix.png`


## Confusion Matrix

The confusion matrix is a visualisation of the models performance, it contains precision and recall values for each class.

A bit of reading about precision and recall in classification:
[https://en.wikipedia.org/wiki/Precision_and_recall]


Precision - how many retrieved items were relevant (True positives / Predictes as positives)

Recall - how many of the relevant items were retrieved ( True positives / All positives ) 

Formula to calculate class presision and class recall:

True Positive = diagonal value for that class

Class precision = TP / Row sum
Class recall = TP / Column sum