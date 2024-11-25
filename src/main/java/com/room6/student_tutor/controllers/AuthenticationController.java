package com.room6.student_tutor.controllers;

import com.room6.student_tutor.data.StudentRepository;
import com.room6.student_tutor.data.TutorRepository;
import com.room6.student_tutor.data.UserRepository;
import com.room6.student_tutor.models.Student;
import com.room6.student_tutor.models.Tutor;
import com.room6.student_tutor.models.User;
import com.room6.student_tutor.models.dto.LoginFormDTO;
import com.room6.student_tutor.services.UserServices;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Optional;

@Controller
public class AuthenticationController {

    @Autowired
    public TutorRepository tutorRepository;

    @Autowired
    public StudentRepository studentRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public String displayLoginForm(Model model) {
        model.addAttribute(new LoginFormDTO());
//        model.addAttribute("title", "Log In");
        return "landing";
    }

    @PostMapping()
    public String processTutorLogin(@ModelAttribute @Valid LoginFormDTO loginFormDTO, Errors errors,
                                    HttpServletRequest request, Model model) {

        if (errors.hasErrors()) {
            return "landing";
        }

        User theUser = userRepository.findByUsername(loginFormDTO.getUsername());

        if (theUser == null) {
            errors.rejectValue("username", "user.invalid", "The given username does not exist");
            return "landing";
        }

        String password = loginFormDTO.getPassword();

        if (!theUser.isMatchingPassword(password)) {
            errors.rejectValue("password", "password.invalid", "Invalid password");
            return "landing";
        }

        setUserInSession(request.getSession(), theUser);

        if(theUser.getRole().equals("tutor")){
            return "tutors/home";
        } else if(theUser.getRole().equals("student")){
            return "students/home";
        }
        errors.rejectValue("username", "user.invalid", "The given username does not exist");
        return "landing";
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request) {
        request.getSession().invalidate();
        return "redirect:/";
    }

    private static final String userSessionKey = "user";

    public User getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        Optional<User> user = userRepository.findById(userId);

        if (user.isEmpty()) {
            return null;
        }

        return user.get();
    }

    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
    }
}
