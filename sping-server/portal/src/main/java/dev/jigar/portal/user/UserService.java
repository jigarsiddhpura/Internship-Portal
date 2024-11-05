package dev.jigar.portal.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // Sign-up method
    
    public User signUp(User user) throws Exception {
        if (userRepository.findBySapId(user.getSapId()).isPresent()) {
            throw new Exception("SAP ID already exists");
        }
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new Exception("Email already exists");
        }
        // Encrypt password
        // user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        user.setIsNew(false);
        return user;
    }

    // Sign-in method
    public User signIn(String email, String password) throws Exception {
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            // if (passwordEncoder.matches(password, user.getPassword())) {
            if (password.equals(user.getPassword())) { // uncomment above and comment curr for serialization
                return user;
            } else {
                throw new Exception("Invalid credentials");
            }
        } else {
            throw new Exception("User not found");
        }
    }
}
