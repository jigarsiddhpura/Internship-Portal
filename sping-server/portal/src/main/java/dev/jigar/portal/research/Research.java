package dev.jigar.portal.research;

import org.hibernate.validator.constraints.URL;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import jakarta.validation.constraints.NotEmpty;

@Table("research")
public record Research(
    @Id
    Integer id,
    @NotEmpty
    String topic,
    String eligibility,
    String skills,
    @URL
    String applyLink
) {

}
