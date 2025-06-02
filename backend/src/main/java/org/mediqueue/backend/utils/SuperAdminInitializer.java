package org.mediqueue.backend.utils;

import org.mediqueue.backend.enums.Roles;
import org.mediqueue.backend.models.User;
import org.mediqueue.backend.repositories.UserRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class SuperAdminInitializer implements CommandLineRunner {

    private final UserRepo userRepository;
    private final PasswordEncoder passwordEncoder;

    public SuperAdminInitializer(UserRepo userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        final String superAdminUsername = "Mediqueue_Admin";
        final String superAdminEmail = "mediqueue.admin@admin.com";

        boolean userExists = userRepository.findByUsername(superAdminUsername).isPresent();

        if (!userExists) {
            User superAdmin = new User();
            superAdmin.setUsername(superAdminUsername);
            superAdmin.setEmail(superAdminEmail);
            superAdmin.setPassword(passwordEncoder.encode("mediqueue@admin")); // Use env or config in real apps
            superAdmin.setRole(Roles.SUPER_ADMIN);
            superAdmin.setPhone("1998");
            superAdmin.setNameWithInitials("Medi Queue");

            userRepository.save(superAdmin);
            System.out.println("✅ Super admin created.");
        } else {
            System.out.println("ℹ️ Super admin already exists. No action taken.");
        }
    }
}
