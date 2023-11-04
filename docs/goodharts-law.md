---
title: Goodhart's Law
---
# Goodhart's Law
- Often cited as "When a measure becomes a target, it ceases to be a good measure"
- How I interpret it: "When an evaluation metric becomes an explicit optimization target, it ceases to be a good evaluation metric"
- We often make the evaluation metric our optimization target because the true target is difficult to quantify. 
	- For example, we often want to optimize sites to increase user engagement – CTR is one aspect of user engagement, but not the whole story. It is, however, very easy to quantify and so we tend to explicitly optimize for it. In ad tech, this can result in clickbait being shown rather than high-quality content.
## Why does this happen?
Why does optimizing for a good evaluation metric not also optimize the target? In short, this is because evaluation metrics quantify a subset of outcomes, and optimizing for some outcomes of a behavior is not equivalent to optimizing for the behavior itself. Here's a (common) hypothetical scenario to make this clear:

1. We identify a desired behavior that we wish to stimulate and observe its outcomes.
2. We notice a subset of those outcomes are well correlated with the desired behavior and easily quantifiable. This makes them good candidates for evaluation metrics

![user_engagement_causal_mech_forward](__assets/img/user_engagement_causal_mech_forward.png)
3. To stoke the desired behavior, we implement a treatment to stimulate this subset of outcomes. This is effectively an attempt to invert the causal diagram and assert that positive subset of outcomes necessitates an improvement in the desired behavior. Unfortunately, causality rarely works this way.

![](__assets/img/user%20engagement%20casual%20diagram%20flipped.png)

---
# Resources
