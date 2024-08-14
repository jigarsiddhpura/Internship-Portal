package dev.jigar.portal.internship;

import org.springframework.stereotype.Repository;
import org.springframework.data.jdbc.repository.query.Query;
// import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.ListCrudRepository;
import java.util.*;

@Repository
public interface InternshipRepository extends ListCrudRepository<Internship, Integer>  {
    
    @Query("select * from internships where companyName = :companyName")
    List<Internship> findByCompanyName(String companyName);

    @Query("select * from internships where jobType = :jobType")
    List<Internship> findByJobType(String jobType);

}
