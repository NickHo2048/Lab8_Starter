# Lab 8 - Starter
## Nicholas Ho, Kartik Gugnani

1. Within a Github action that runs whenever code is pushed
In this way, code is automatically tested everytime you push. You don't need to manually run tests every single time. You can simply automate it in Github Actions. Furthermore, you run tests every time code is pushed to make sure we stop bugs before they become too big. We make sure we are pushing solid code. 


2. No

3. No; messaging someone is a feature with lots of moving parts. Unit testing was made to debug on a small scale without a lot of moving parts.

4. Yes; the goal is more specific: is the message more or less than 80 characters. We are looking at a very small scale feature with maybe one or two moving parts, which is the point of unit tests.

[](lab8.test.png)
[](sum.test.png)
[](unit.test.png)