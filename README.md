# Coding Challenge

Create a react app with a form that posts data to Mailchimp via AWS.

## Install & Deploy to Amazon S3

```bash
npm install
npm run build
npm run deploy
```

You can check the gateway [Here](http://mailchimp-signup-app.s3-website-us-east-1.amazonaws.com)

## How does it work

When submit a form, it invokes AWS Lambda Function with form data.

Lambda API gateway:  [https://vi0q1k3t0h.execute-api.us-east-1.amazonaws.com/default/mailchimp-signup](https://vi0q1k3t0h.execute-api.us-east-1.amazonaws.com/default/mailchimp-signup)

Lamda function posts data to MailChimp.
