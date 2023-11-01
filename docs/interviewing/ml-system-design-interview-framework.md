---
title: ML System Design Interview Framework
---
# ML System Design Interview Framework
I developed this framework in 2021 while interviewing for machine learning roles. Unfortunately, I only have one data point on its efficacy – an interview with Yelp – so your mileage may vary.

The framework is arranged (mostly) chronologically. If your interviewer wants you to focus on specific aspects of the problem (e.g. more modeling, less data engineering), you may need to jump around a bit. Otherwise, if they let you drive the discussion, I feel you can quite literally just go down this list.

You do not need to address every point during the interview. Some points may be irrelevant. Use your best judgement here on which to leave out. 

Similarly, some questions will have obvious answers and not need asking. Instead, you can simply confirm the answer aloud with the interviewer. A good chunk of points in technical interviews comes from simply demonstrating that you understand the problem – this strategy helps ensure you tick those boxes
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
- **What are the business-level goals of the system?** 
	- For example, are we trying to drive user engagement, increase revenue, etc. 
	- *Use this to pick evaluation metrics for the system later on*
- **Is there any portion of this system already in place, or are we building everything from scratch?**
	- e.g. Is there a status quo model we need to be comparing against? Is there an ETL pipeline already 
- **How many users are we concerned with serving at once?**
- **Are there any constraints on data availability?**
	- e.g. do we only have a small amount of data at our disposal? Is the data annotated with the response variable we care about?
- **Will the product need to be personalized to each user? If so, what kind of user data do we have available to us?**
- **Are there any minimum performance requirements we need to meet?**
	- e.g. latency requirements? accuracy/precision requirements?
 ## 2. High-level system architecture
- **Propose the metrics you will use to evaluate the system in production (and offline if applicable)**
	- Decide this based on the business-level goals set out above
	- Worth acknowledging that most metrics are just measurable proxies for our goals, and not the goals themselves. CTR ≠ user engagement and [it's dangerous to believe otherwise](../goodharts-law.md).

---
# Resources
- [Huyen Chip's Machine Learning Systems Design](https://huyenchip.com/ml-interviews-book/)
- [ML Design Template](https://www.mle-interviews.com/ml-design-template)