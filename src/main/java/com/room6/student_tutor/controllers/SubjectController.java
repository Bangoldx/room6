package com.room6.student_tutor.controllers;

import com.room6.student_tutor.data.CommentRepository;
import com.room6.student_tutor.data.ForumRepository;
import com.room6.student_tutor.data.SubjectRepository;
import com.room6.student_tutor.data.UserRepository;
import com.room6.student_tutor.mappers.ForumsDTOMapper;
import com.room6.student_tutor.mappers.SubjectDTOMapper;
import com.room6.student_tutor.models.Forum;
import com.room6.student_tutor.models.Subjects;
import com.room6.student_tutor.models.User;
import com.room6.student_tutor.models.dto.ForumDTO;
import com.room6.student_tutor.models.dto.SubjectsDTO;
import com.room6.student_tutor.services.ForumServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/subjectservices")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class SubjectController {
    @Autowired
    private ForumRepository forumRepository;
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private AuthenticationController authenticationController;
    @Autowired
    private ForumServices forumServices;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SubjectRepository subjectRepository;

    @GetMapping("/subjects")
    public List<SubjectsDTO> viewForums() {
        Iterable<Subjects> subjects = subjectRepository.findAll();
        List<SubjectsDTO> subjectsDTOS = new ArrayList<>();

        for(Subjects subject : subjects){
            int id = subject.getId();
            String name = subject.getName();
            String description = subject.getDescription();
            SubjectsDTO subjectDTO = SubjectDTOMapper.toSubjectDTO(subject,id,name,description);
            subjectsDTOS.add(subjectDTO);
        }
        return subjectsDTOS;
    }

    @PostMapping("/newsubject")
    public ResponseEntity<String> newSubject(@RequestBody Subjects subject){

        subjectRepository.save(subject);
        return ResponseEntity.ok("Subject Created");
    }

}
