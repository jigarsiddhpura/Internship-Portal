package dev.jigar.portal.research;

import org.springframework.stereotype.Repository;

import dev.jigar.portal.internship.Internship;

import org.springframework.data.jdbc.repository.query.Query;
// import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.ListCrudRepository;
import java.util.*;

@Repository
public interface ResearchRepository extends ListCrudRepository<Research, Integer>{
    
    @Query("select * from research where topic = :topicName")
    List<Internship> findBytopic(String topicName);
}
