# Angular and Spring Boot CRUD Example

This example app shows how to create a Spring Boot API and CRUD (create, read, update, and delete) its data with a beautiful Angular + Angular Material app.

Please read [Build a Beautiful CRUD App with Spring Boot and Angular](https://auth0.com/blog/spring-boot-angular-crud) to see how it was created or follow [this demo script](demo.adoc).

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

This will get a copy of the project installed locally. You'll need to configure the application with a registered OIDC app for it to start. Luckily, Auth0 makes this easy!

### Use Auth0 for OpenID Connect

Install the [Auth0 CLI](https://github.com/auth0/auth0-cli) and run `auth0 login` in a terminal.

Next, run `auth0 apps create`:

```shell
auth0 apps create \
  --name "Bootiful Angular" \
  --description "Spring Boot + Angular = ❤️" \
  --type regular \
  --callbacks http://localhost:8080/login/oauth2/code/okta,http://localhost:4200/login/oauth2/code/okta \
  --logout-urls http://localhost:8080,http://localhost:4200 \
  --reveal-secrets
```

Copy the results from the CLI into an `.okta.env` file:

```shell
export OKTA_OAUTH2_ISSUER=https://<your-auth0-domain>/
export OKTA_OAUTH2_CLIENT_ID=<your-client-id>
export OKTA_OAUTH2_CLIENT_SECRET=<your-client-secret>
```

If you're on Windows, name the file `.okta.env.bat` and use `set` instead of `export`:

```shell
set OKTA_OAUTH2_ISSUER=https://<your-auth0-domain>/
set OKTA_OAUTH2_CLIENT_ID=<your-client-id>
set OKTA_OAUTH2_CLIENT_SECRET=<your-client-secret>
```

Then, run `source .okta.env` (or run `.okta.env.bat` on Windows) to set the environment variables. Start your app and log in at `http://localhost:8080`:

```shell
source .okta.env
mvn spring-boot:run -Pprod
```

NOTE: You can also use your [Auth0 dashboard](https://manage.auth0.com) to configure your application. Just make sure to use the same URLs specified above.

You can prove everything works by running this project's Cypress tests. Add environment variables with your credentials to the `.okta.env` (or `.okta.env.bat`) file you created earlier.

```shell
export CYPRESS_E2E_DOMAIN=<your-auth0-domain> # use the raw value, no https prefix
export CYPRESS_E2E_USERNAME=<your-email>
export CYPRESS_E2E_PASSWORD=<your-password>
```

Then, run the Cypress tests and watch them pass:

```shell
source .okta.env
cd app
ng e2e
```

You can see [view this project's CI pipeline](.github/workflows/main.yml) and see that all its tests [are passing too](https://github.com/oktadev/auth0-spring-boot-angular-crud-example/actions).

## Links

This example uses the following open source libraries:

* [Angular](https://angular.io)
* [Angular Material](https://material.angular.io)
* [Spring Boot](https://spring.io/projects/spring-boot)
* [Spring Security](https://spring.io/projects/spring-security)

## Help

Please post any questions as comments on the [blog post](https://auth0.com/blog/spring-boot-angular-crud), or visit our [Auth0 Community Forums](https://community.auth0.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).
