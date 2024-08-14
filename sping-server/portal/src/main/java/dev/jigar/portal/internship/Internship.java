package dev.jigar.portal.internship;

import org.hibernate.validator.constraints.URL;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import jakarta.validation.constraints.NotEmpty;

@Table("internships")
public record Internship(
    @Id
    Integer id,
    @NotEmpty
    String jobTitle,
    String companyName,
    String location,
    String stipend,
    String duration,
    String jobType,
    @URL
    String applyLink,
    @URL
    String internshipLogoUrl
) {
    
}
