# RapidMiner pair coding exercise

Task 1.
Execution takes time
* modify `/execute` and `/executionStatus` endpoints so that FE can poll the status until it is complete
* executionStatus should return these values: `execution`, `error`, `result`
* simulate execution with a timer
* modify FE so that it only loads result when status is `complete`

Task 2: 
* Convert the raw performance data into a ConfusionMatrix
*  display the matrix in an Ant Table


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