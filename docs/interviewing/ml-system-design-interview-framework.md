---
title: ML System Design Interview Framework
---
# ML System Design Interview Framework
I developed this framework in 2021 while interviewing for machine learning roles. Unfortunately, I only have one data point on its efficacy – an interview with Yelp – so your mileage may vary.

The framework is arranged (mostly) chronologically. If your interviewer wants you to focus on specific aspects of the problem (e.g. more modeling, less data engineering), you may need to jump around a bit. Otherwise, if they let you drive the discussion, I feel you can quite literally just go down this list.

You do not need to address every point during the interview. Some points may be irrelevant. Use your best judgement here on which to leave out. 
## 1. Clarify and gather requirements

- **Repeat back the problem in your own words.**
	- Why? This demonstrates to interviewer that you understand the problem (a surprisingly large amount of points in most technical interviews), it resolves any potential misunderstandings, and gives you a moment to catch your breath.
- **What are the business-level goals of the system?** 
	- Are we trying to drive user engagement, increase revenue, , etc. 
	- Use this to pick evaluation metrics for the system later on
- **Is there any portion of this system already in place, or are we building everything from scratch?**
	- e.g. Is there a status quo model we need to be comparing against? Is there an ETL pipeline in place already?
- **Will we need to make predictions in realtime?**
- **How many users are we concerned with serving at once?**
- **Are there any constraints on data availability?**
	- e.g. do we only have a small amount of data at our disposal? Is the data annotated with the response variable we care about?
- **Will the product need to be personalized to each user? If so, what kind of user data do we have available to us?**
- **Any minimum performance requirements we need to meet?**
	- e.g. latency requirements? accuracy/precision requirements?
## 2. High-level system architecture
- **Propose the metrics you will use to evaluate the system both in production and offline**
	- Decide this based on the business-level goals set out above
	- Worth acknowledging that most metrics are just measurable proxies for our goals, and not the goals themselves. CTR ≠ user engagement and [it's dangerous to believe otherwise](mathematics/goodharts-law.md).
- **Propose a high-level architecture for the system**
	- Serves as an outline for the discussion ahead
	- Does not need to be completely fleshed out at this point
	- When in doubt, most ML systems have the following generic structure:

![generic-ml-system-diagram](../__assets/img/generic-ml-system-diagram.png)

## 3. Data and Feature Engineering
This is where the interview can become more nonlinear and your interviewer may start probing your thinking more. 

Under each discussion point, I have included a few key questions you should prepare for – either the interviewer will ask them or you can prompt the discussion yourself and provide the answers.

* **What is our model's prediction target?**
	* e.g. for a content recommendation system, output might be one/many pieces of content. For an segmentation model, it will be a binary map of pixels that belong to the class(es) of interest
* **What is the framing for our learning task?**
	* *Does this problem suit a supervised, unsupervised, or reinforcement learning approach?*
	* *If supervised: is this a regression or classification problem?*
	* *If classification: what type of classification problem? Single-class? Multi-class? Multi-label?*
* **What input features should we use?**
	* *What broad categories of features should we include?* (e.g. user data, session data, location data, features about the content)
	* *What are examples of some high-value features for this problem?*
	* *Are there important synergies between features that we should keep in mind? Should we engineer feature crosses for them?*
- **How to handle null values?**
	- *Should we drop records with nulls or impute the values?*
	- *What imputation values/methods should we use?* (zero, median, mean, etc.)
- **How to handle imbalances in the data?**
	- *What are some common techniques for handling class imbalances?*
	- *What are the tradeoffs to downsampling majority classes vs. upsampling minority classes?*
- **Discuss feature transformations**
	- *Would it be useful to apply any transformations to our input features? Why?*
	- *What are some common feature transformations? What are the situations when you might choose one over another?* (e.g. when might log scaling be preferable to min-max scaling?)
- **Should we perform any feature selection or feature importance analyses?**
	- *What are the benefits of feature selection?*
	- *What are some common techniques for selecting features?*
- **What sort of train-test splits should we perform?**
	- This discussion point could lead down a rabbit hole – lots of different questions you could be asked here and I have tried to include some big ones that come to mind.
	- *What is the purpose of having a (holdout) test set?* (i.e. why do we do a train-test split in the first place)
	- *What is a validation set used for? How does it differ from a test set?*
	- *What are some common techniques used in model validation?*
	- *Define model bias. Define model variance. What is bias-variance tradeoff?*
	- *What is overfitting?*
	- *Can you overfit on a validation set?*
	- *What is hyperparameter optimization?*
- **Are there data privacy concerns we should bear in mind?**
	- Probably does not need an exhaustive discussion, Acknowledging that some data is PII (e.g. user data) and thus sensitive is probably sufficient
- **Data biases**
	- Again, probably does not warrant an exhaustive discussion – acknowledging the potential presence of (social) biases in the dataset and that the model could learn to reinforce these biases is probably sufficient

---
# Resources
- [Huyen Chip's Machine Learning Systems Design](https://huyenchip.com/ml-interviews-book/)
- [ML Design Template](https://www.mle-interviews.com/ml-design-template)