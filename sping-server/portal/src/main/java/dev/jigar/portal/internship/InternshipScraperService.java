package dev.jigar.portal.internship;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;

@Service
public class InternshipScraperService {

    private static final Logger log = LoggerFactory.getLogger(InternshipScraperService.class);
    
    @Autowired
    private InternshipService internshipService;

    @Value("${internship.scraper.url}")
    private String scrapingURL;

    // postcontruct - used to initalize something after dependency injection
    // @PostConstruct
    // public void init() {
    //     // scrape only if db is empty
    //     if (internshipService.getAllInternships().isEmpty()) {
    //         scrapeAndSaveInternships(scrapingURL);
    //     }
    // }

    // public void scrapeAndSaveInternships(String url) {
    //     log.info("Initializing InternshipScraperService");
    //     List<Internship> internships = scrapeInternships(url);
    //     internshipService.saveInternships(internships);
    // }

    // private List<Internship> scrapeInternships(String url) {
    //     List<Internship> internships = new ArrayList<>();

    //     try {
    //         Document doc = Jsoup.connect(url).get();
    //         Elements internshipElements = doc.select("div.container-fluid.individual_internship.view_detail_button");

    //         for (Element internshipElement : internshipElements) {
    //             String jobTitle = internshipElement.select("h3.job-internship-name").text();
    //             String companyName = internshipElement.select("p.company-name").text();
    //             String location = internshipElement.select("div.row-1-item.locations span").text();
    //             String jobType = extractJobType(internshipElement);
    //             String stipend = internshipElement.select("div.row-1-item i.ic-16-money + span").text();
    //             String duration = internshipElement.select("div.row-1-item i.ic-16-calendar + span").text();
    //             String applyLink = "https://internshala.com/" + internshipElement.attr("data-href");
    //             String internshipLogoUrl = internshipElement.select("div.internship_logo img").attr("src");
    //             String skills = "";

    //             // id = null tells spring Data that its a new field and has no id yet
    //             // id is generated automatically by DB
    //             Internship internship = new Internship(null, jobTitle, companyName, location, stipend, duration, jobType, skills, applyLink, internshipLogoUrl);
    //             internships.add(internship);
    //         }
    //     } catch (IOException e) {
    //         // Log the error and consider throwing a custom exception
    //         e.printStackTrace();
    //     }

    //     return internships;
    // }

    private String extractJobType(Element internshipElement) {
        Element grayLabels = internshipElement.select("div.gray-labels").first();
        if (grayLabels != null) {
            Elements statusLis = grayLabels.select("div.status-li");
            if (!statusLis.isEmpty()) {
                return statusLis.last().select("span").text();
            }
        }
        return "";
    }
}