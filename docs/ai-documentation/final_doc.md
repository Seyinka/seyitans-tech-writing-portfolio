# LLaMA 2 Model Card Documentation

## Purpose

LLaMA 2 is a family of large language models developed by Meta AI, that is available in sizes of 7B, 13B, and 70B parameters.  
The models are trained to support both research and practical applications such as text generation, conversational agents(chatbots), and other natural language processing tasks.

---

## Training Data

LLaMA 2 models are trained on publicly available online datasets, with no use of Meta’s user data.  
It also improves on human feedback.

---

## Metrics

LLaMA 2 was tested on areas such as reasoning, coding, general knowledge, reading comprehension, and math. 
It leveraged the use of TruthfulQA and ToxiGen as automatic safter benchmarks. 

---

## Risks

LLaMA 2 is exposed to biased, harmful, or factually incorrect responses based on what it's trained on.  
Safety testing was carried out in English, which results to quality vary across other languages.  
LLaMA is also exposed to risks of misuse, such as spreading disinformation, spam, or unsafe content, therefore it is advisable to crosscheck infomations before applying in real projects.  

---

## References

- [Meta AI LLaMA 2 GitHub Repository](https://github.com/meta-llama/llama)
