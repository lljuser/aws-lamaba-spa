# aws-lambda-spa
> this is a single page application. use react created.
> It parses the user's IP and server IP through the lambda service behind aws's apigateway and returns it to the user for display
> This spa application only creates three files,index. HTML,umi. CSS, and umi. Js. These static resources are deployed on aws s3 service, registered as static website, and distributed to edge network through aws cloudfront. Cloudfront asks s3 to authorize via OAI account. In this way, we can speed up user inquiries and ensure security.

## roadmap
- react 
- react router 
- fetch 
- antd 
- typescript

---
## 1.required
- npm
- webpack

## 2.dev test
### cmd: npm run dev

## 3.package
### cmd: npm run build

## 4.deploy
### upload to aws s3

## 5.about the token for apigateway-lambda authoriztion
### before request to the server ,add the token in headers
 
## 6.Architecture
![Image text](https://raw.githubusercontent.com/lljuser/aws-lambda-spa/master/architecture.png)

