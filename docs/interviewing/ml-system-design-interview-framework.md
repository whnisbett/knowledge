---
title: ML System Design Interview Framework
---
# ML System Design Interview Framework
- I developed this framework in 2021 while interviewing for machine learning roles. Unfortunately I only have one data point for the framework's efficacy – my interview with Yelp. That being said, the interview went terrifically and I credit that mostly to this framework.
- The framework is arranged (mostly) chronologically. Obviously if your interviewer is asking you specific questions and wants you to focus on specific parts of the problem, you may need to jump around a bit. Otherwise, if they are more hands-off and happy to let you drive the discussion, you can quite literally go down the list of points and address them one-by-one.
- You do not need to address every point or ask every question. Some points will be irrelevant and some questions will have obvious answers. Use your best judgement here.
## Outline 
1. Clarify and gather requirement
2. High-level system architecture
3. Data and feature engineering
4. Modeling
5. Model serving
## 1. Clarify and gather requirements
- **Repeat back the problem in your own words.** 
	- Demonstrates to interviewer that you understand the problem
	- Resolves any misunderstandings right away
	- Gives you a moment to catch your breath
- **What are the (business-level) goals of the system?** 
	- For example, are we trying to drive user engagement, increase revenue, etc. 
	- *Use this to pick evaluation metrics for the system later on*
- **Is there any portion of this system already in place, or are we building everything from scratch?**
	- e.g. Is there a status quo model we need to be comparing against? Is there an ETL pipeline already 
- **How many users are we concerned with serving at once?**
- **Are there any constraints on data availability?**
	- e.g. constraints on how much data is available? Is the data annotated with the response variable we care about?
- **Will the product need to be personalized to each user? If so, what kind of user data do we have available to us?**
- **Are there any minimum performance requirements we need to meet?**
	- e.g. latency requirements? accuracy/precision requirements?
 ## 2. High-level system architecture
- **Propose the metrics you will use to evaluate the system in production (and offline if applicable)** 

---
# Resources
- [Huyen Chip's Machine Learning Systems Design](https://huyenchip.com/ml-interviews-book/)
- [ML Design Template](https://www.mle-interviews.com/ml-design-template)