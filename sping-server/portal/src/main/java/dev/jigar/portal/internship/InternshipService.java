package dev.jigar.portal.internship;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class InternshipService {
    
    @Autowired
    private InternshipRepository internshipRepository;

    @Transactional
    public void saveInternships(List<Internship> internships) {
        internshipRepository.saveAll(internships);
    }

    public List<Internship> getAllInternships() {
        return internshipRepository.findAll();
    }

    public List<Internship> getInternshipByCompanyName(String companyName) {
        return internshipRepository.findByCompanyName(companyName);
    }

    public List<Internship> getInternshipByJobType(String jobType) {
        return internshipRepository.findByJobType(jobType);
    }

    public void saveInternship(Internship internship) {
        internshipRepository.save(internship);
    }


}
