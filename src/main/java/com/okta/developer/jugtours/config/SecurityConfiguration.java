package com.okta.developer.jugtours.config;

import com.okta.developer.jugtours.web.CookieCsrfFilter;
import com.okta.developer.jugtours.web.SpaWebFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfTokenRequestAttributeHandler;

@Configuration
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests((authz) -> authz
            .requestMatchers("/", "/index.html", "*.ico", "*.css", "*.js", "/api/user").permitAll()
            .anyRequest().authenticated()
        );

        http.oauth2Login();
        http.oauth2ResourceServer().jwt();

        http.csrf()
            .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
            .csrfTokenRequestHandler(new CsrfTokenRequestAttributeHandler());
        http.addFilterAfter(new CookieCsrfFilter(), BasicAuthenticationFilter.class);

        http.addFilterAfter(new SpaWebFilter(), BasicAuthenticationFilter.class);

        return http.build();
    }
}
