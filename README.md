# Angular and Spring Boot CRUD Example

This example app shows how to create a Spring Boot API and CRUD (create, read, update, and delete) its data with an Angular app.

**Prerequisites:** [Java 17](http://sdkman.io) and [Node.js 18+](https://nodejs.org/)

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/oktadev/auth0-spring-boot-angular-crud-example.git jugtours
cd jugtours
```

This will get a copy of the project installed locally. To install all of its dependencies and start each app, follow the instructions below.

To run the server, run:

```bash
mvn spring-boot:run
```

To run the client, cd into the `app` folder and run:

```bash
npm i && npm start
```

### Use Auth0 for OpenID Connect

Install the [Auth0 CLI](https://github.com/auth0/auth0-cli) and run `auth0 login` in a terminal.

Next, run `auth0 apps create`:

```shell
auth0 apps create \
  --name "Spring Boot 3.1" \
  --description "So Bootiful" \
  --type regular \
  --callbacks http://localhost:8080/login/oauth2/code/okta \
  --logout-urls http://localhost:8080 \
  --reveal-secrets
```

Copy the results from the CLI into an okta.env file:

```shell
export OKTA_OAUTH2_ISSUER=https://<your-auth0-domain>/
export OKTA_OAUTH2_CLIENT_ID=<your-client-id>
export OKTA_OAUTH2_CLIENT_SECRET=<your-client-secret>
export OKTA_OAUTH2_AUDIENCE=https://<your-auth0-domain>/api/v2/
```

Then, run `source okta.env` to set the environment variables. Start your app and log in:

```shell
source okta.env
mvn spring-boot:run
```

Run `./mvnw spring-boot:run -Pprod` and log in to your app at `http://localhost:8080`.

NOTE: You can also use your [Auth0 dashboard](https://manage.auth0.com) to configure your application. Just make sure to use the same URLs specified above.

## Links

This example uses the following open source libraries:

* [Angular](https://angular.io)
* [Spring Boot](https://spring.io/projects/spring-boot)
* [Spring Security](https://spring.io/projects/spring-security)

## Help

Please post any questions as comments on the [blog post](...), or visit our [Auth0 Community Forums](https://community.auth0.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).
