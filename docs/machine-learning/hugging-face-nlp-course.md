---
title: Hugging Face NLP Course
---
# Hugging Face NLP Course
- My notes from [Hugging Face's NPL Course](https://huggingface.co/learn/nlp-course/en/chapter1/1)
## Chapter 1 – Transformer Models
### `pipeline` models
- Common NLP tasks
	- Classifying whole sentences (e.g. sentiment analysis, spam detection)
	- Classifying each word in a sentence (e.g. NER, PoS tagging)
	- Generating text content
	- Extracting an answer from a text
	- Generating a new sentence from an input text
- `transformers` package offers a number of E2E models through `pipeline` interface – all you need to do is specify the task
```python
from transformers import pipeline

sent_classifier = pipeline(task="sentiment-analysis")
sent_classifier("I didn't love this restaurant")
```
- [Currently accepted tasks](https://huggingface.co/docs/transformers/main_classes/pipelines#transformers.pipeline.task) that you can pass to pipeline
- `pipeline` takes care of pre-processing, inference, and post-processing
- [Index of all Hugging Face models](https://huggingface.co/models)
### Transformer History
- June 2017: Transformer model is introduced by Google in [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- June 2018: The first pretrained Transformer model, GPT (Generative Pretrained Transformer), is introduced by OpenAI in [Improving Language Understanding by Generative Pre-Training](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf)
- October 2018: BERT (Bidirectional Encoder Representations from Transformers) is introduced by Google in [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://arxiv.org/abs/1810.04805)
- February 2019: GPT-2 is introduced by OpenAI in [Language Models are Unsupervised Multitask Learners](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf)
- October 2019: DistilBERT introduced by Google in [DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter](https://arxiv.org/abs/1910.01108)
- October 2019: Facebook AI introduces [BART](https://arxiv.org/pdf/1910.13461.pdf) and Google introduces [T5](https://arxiv.org/pdf/1910.10683.pdf)
- May 2020: GPT-3 introduced by OpenAI in [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)– the model performs well on a variety of tasks without any fine-tuning (called *zero-shot learning*)
- These models can be broadly **grouped into 3 categories**
	- GPT-like: auto-regressive transformers
	- BERT-like: auto-encoding transformers
	- BART/T5-like: seq2seq transformers
### Transformer Architecture and Training
- Leveraging transfer learning in the context of transformers is referred to as *fine-tuning* a pretrained model

---
# Resources
- [Hugging Face Notebooks](https://github.com/huggingface/notebooks)
- 