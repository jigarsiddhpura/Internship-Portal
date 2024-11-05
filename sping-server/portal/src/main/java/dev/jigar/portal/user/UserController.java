package dev.jigar.portal.user;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// import dev.jigar.portal.PortalApplication;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    // Sign-up endpoint
    @PostMapping("/signup")
    public ResponseEntity<User> signUp(@RequestBody User user) throws Exception {
        // log.info("Signing up user: {}", user.get);
        User newUser = userService.signUp(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    // Sign-in endpoint
    @PostMapping("/signin")
    public User signIn(@RequestBody SignInRequest request) throws Exception {
        return userService.signIn(request.getEmail(), request.getPassword());
    }
}