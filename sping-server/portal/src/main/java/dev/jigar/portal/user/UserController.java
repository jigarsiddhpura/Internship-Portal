package dev.jigar.portal.user;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



// import dev.jigar.portal.PortalApplication;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class UserController {

    @Autowired
    private UserService userService;

    // Sign-up endpoint
    @PostMapping("/signup")
    public ResponseEntity<User> signUp(@RequestBody User user) throws Exception {
        // log.info("Signing up user: {}", user.get);
        User newUser = userService.signUp(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED); // 201
    }

    // Sign-in endpoint
    @PostMapping("/signin")
    public ResponseEntity<User> signIn(@RequestBody SignInRequest request, HttpSession session) throws Exception {
        User user = userService.signIn(request.getEmail(), request.getPassword());
        session.setAttribute("user", user);
        return new ResponseEntity<>(user, HttpStatus.OK); // 200
    }

    @PostMapping("/signout")
    public ResponseEntity<Void> signOut(HttpSession session) {
        session.invalidate();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT); // 204
    }

    @GetMapping("/status")
    public ResponseEntity<User> getStatus(HttpSession session) {
        User user = (User) session.getAttribute("user");
        if (user != null) { 
            return new ResponseEntity<>(user, HttpStatus.OK); // 200
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED); // 401
        }
    }
    
}