---
title: 'Integrate Slack API for real-time error logging in Django REST Framework'
date: '2023-09-09'
techStack:
  - Django
  - Slack API
---

### 📋 Scenario

We had a minor challenge while attempting to enable debug mode in our production environment to capture crucial error messages. Recognizing the time and effort involved, we made the decision to streamline the process by integrating a Slack App into a private channel. This integration allows us to seamlessly log errors occurring in our production environment.

### 🎯 Objective

Our goal was to efficiently log production errors within a private Slack channel, thereby enhancing our debugging process.

### 🛠️ Implementation

1. Visit [Slack API](https://api.slack.com/apps) to create an app. Enter desired app name the pick a workspace.

![create a slack app](/images/posts/create-a-slack-app.png)

2. Add a webhook url, setup the destination channel

![create a webook](/images/posts/create-a-webhook.png)

3. Write a customized slack handler & slack logger

```python
# utils/slack_handler.py

import logging, json, requests

class SlackHandler(logging.Handler):
  def emit(self, record):
    # replace this with your webhook url
    API_ERRORS_WEBHOOK = 'https://hooks.slack.com/services/XXXXXXXXXXX/XXXXXXXXXXX/XXXXXXXXXXXXXXXXXXXXXX'

    try:
      log_entry = self.format(record)
      payload = { 'text': log_entry }

      response = requests.post(
        API_ERRORS_WEBHOOK,
        data=json.dumps(payload),
        headers={ 'Content-Type': 'application/json' }
      )
      if response.status_code != 200:
        raise ValueError(f"Request to Slack returned an error {response.status_code}, the response is:\n{response.text}")
    except Exception as e:
      print(f"Error in SlackHandler: {str(e)}")
```

```python
# core/settings.py

if DEBUG == True:
  LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "handlers": {
      "console": {
        "class": "logging.StreamHandler",
      },
      'slack': {
        'class': 'utils.slack_handler.SlackHandler', # custom handler
      },
    },
    "loggers": {
      "django": {
        "handlers": ["console"],
        "level": "INFO",
      },
      "slack": {
        "handlers": ["slack"],
        "level": "DEBUG",
      }
    }
  }
```

5. Init and call slack logger

```python
logger = logging.getLogger('django') # default logger
slack_logger = logging.getLogger('slack')
```

```python
# Log to slack as errors are log in console
logger.error("Invalid or empty data received.")
slack_logger.error(":x: Invalid or empty data received.")
```

6. Result in Slack

![slack logs demo](/images/posts/slack-logs-demo.png)
