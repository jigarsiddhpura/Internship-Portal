package dev.jigar.portal;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;

import ch.qos.logback.core.joran.spi.ElementSelector;
import dev.jigar.portal.internship.Internship;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.*;


@SpringBootApplication(scanBasePackages = "dev.jigar.portal")
public class PortalApplication {

	private static final Logger log = LoggerFactory.getLogger(PortalApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(PortalApplication.class, args);
		log.info("Application started successfully");
	}

}
