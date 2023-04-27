package com.okta.developer.jugtours;

import com.okta.developer.jugtours.model.Event;
import com.okta.developer.jugtours.model.Group;
import com.okta.developer.jugtours.model.GroupRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;

@Component
class Initializer implements CommandLineRunner {

    private final GroupRepository repository;

    public Initializer(GroupRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {
        Stream.of("Omaha JUG", "Kansas City JUG", "Chicago JUG",
                "Dallas JUG", "Philly JUG", "Garden State JUG", "NY Java SIG")
            .forEach(name -> repository.save(new Group(name)));

        Group jug = repository.findByName("Garden State JUG");
        Event e = new Event(Instant.parse("2023-10-18T18:00:00.000Z"),
            "OAuth for Java Developers", "Learn all about OAuth and OIDC + Java!");
        jug.setEvents(Collections.singleton(e));
        repository.save(jug);

        repository.findAll().forEach(System.out::println);
    }
}
