package dev.jigar.portal.internship;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class InternshipController {

    @Autowired
    private InternshipService internshipService;

    @GetMapping("/internships")
    public List<Internship> getAllInternships() {
        return internshipService.getAllInternships();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/internships")
    public void postInternship(@RequestBody Internship internship) {
        internshipService.saveInternship(internship);
    }
    
}
