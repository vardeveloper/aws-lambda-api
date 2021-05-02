# aws-lambda-api

### endpoints:

```bash
  GET - https://5te6jqfh11.execute-api.us-east-1.amazonaws.com/dev/translate
  POST - https://5te6jqfh11.execute-api.us-east-1.amazonaws.com/dev/create
  GET - https://5te6jqfh11.execute-api.us-east-1.amazonaws.com/dev/list
  GET - https://5te6jqfh11.execute-api.us-east-1.amazonaws.com/dev/createtable
  GET - https://5te6jqfh11.execute-api.us-east-1.amazonaws.com/dev/deletetable
```

### Invocation

```bash
curl --request POST 'https://5te6jqfh11.execute-api.us-east-1.amazonaws.com/dev/create' --header 'Content-Type: application/json' --data-raw '{"name": "Victor", "last_name": "Alcantara", "email": "vitucho_6@hotmail.com"}'
```
