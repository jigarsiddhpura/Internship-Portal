package dev.jigar.portal.research;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResearchService {
    
    @Autowired
    private ResearchRepository researchRepository;

    public void saveResearch(Research r) {
        researchRepository.save(r);
    }

    public List<Research> getAllResearch() {
        return researchRepository.findAll();
    }
}
