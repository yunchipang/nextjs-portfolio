---
title: 'Triggering email notification upon data change in Django REST Framework'
date: '2023-09-09'
techStack:
  - Django
---

### 📋 Scenario

Our API built with Django REST Framework has a `DatePlan` entity, which includes a `status` field. We wanted to set up an automated email notification system that triggers an email to the user when the value of the status field changes to `'VE'` (indicating that their generated date plan has been verified). To accomplish this, we wrote the logic in the `signals.py` file of the target app in our Django backend.

### 🎯 Objective

The goal is to notify users promptly and effectively when their date plan achieves the `'VE'` status, ensuring a seamless user experience.

### 🛠️ Implementation

We implemented this functionality by utilizing Django signals and the [django.core.mail](https://docs.djangoproject.com/en/4.2/topics/email/#send-mail) module, a powerful tool for responding to specific database events, in this case, changes to the status field in the `DatePlan` entity. When a change to `'VE'` occurs, the system will check the `email_notification_enabled` field of the associated User. If the user has consented, an email notification will be sent to their registered email address. This approach respects the user's preference while ensuring timely updates for those who wish to stay informed about their plan's verification status.

```python
@receiver(post_save, sender=DatePlan)
def send_email_on_status_change(sender, instance, **kwargs):
    if instance.status == 'VE' and instance.user:
        try:
            if user.email_notifications_enabled:
                subject = 'Your DatePlan is now verified 🎉'
                message = f'Congratulations! Your date plan at {instance.plan.place} is now verified.'
                from_email = settings.DEFAULT_FROM_EMAIL
                recipient_list = [instance.user.email]

                send_mail(subject, message, from_email, recipient_list)
        except:
            logger.warning(f"User profile does not exist for this user. ID: {instance.user.id}")
```
