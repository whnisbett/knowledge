---
title: Goodhart's Law
---
# Goodhart's Law
- Often cited as "When a measure becomes a target, it ceases to be a good measure"
- How I interpret it: "When an evaluation metric becomes an explicit optimization target, it ceases to be a good evaluation metric"
- We often make the evaluation metric our optimization target because the true target is difficult to quantify. 
	- For example, we often want to optimize sites to increase user engagement – CTR is one aspect of user engagement, but not the whole story. It is, however, very easy to quantify and so we tend to explicitly optimize for it. In ad tech, this can result in clickbait being shown rather than high-quality content.
## Why does this happen?
Why does optimizing a good evaluation metric not also optimize the target? I see the order of events like this:

1. We identify a desired behavior that we wish to stimulate and observe its outcomes.
2. We notice a subset of those outcomes are well correlated with the desired behavior and easily quantifiable. This makes them good candidates for evaluation metrics
![user_engagement_causal_mech_forward](__assets/img/user_engagement_causal_mech_forward.png)
3. In an attempt to stoke the desired behavior, we implement a treatment to stimulate this subset of outcomes, effectively trying to invert the causal diagram and claim that positive outcomes necessitate positive user engagement. Unfortunately, causality rarely works this way.
![user engagement casual diagram flipped](__assets/img/user%20engagement%20casual%20diagram%20flipped.png)
---
# Resources
