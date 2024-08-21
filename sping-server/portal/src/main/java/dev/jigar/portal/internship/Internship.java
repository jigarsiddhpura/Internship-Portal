package dev.jigar.portal.internship;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
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
    Integer stipend,
    String jobType,
    String skills,
    String eligibility,
    Integer positionsOpen,
    LocalDate startDate,
    LocalDate endDate,
    @URL
    String applyLink,
    @URL
    String internshipLogoUrl
) {
    
}
