package com.room6.student_tutor.controllers;

import com.room6.student_tutor.data.StudentRepository;
import com.room6.student_tutor.data.TutorRepository;
import com.room6.student_tutor.data.UserRepository;
import com.room6.student_tutor.models.User;
import com.room6.student_tutor.models.dto.RegisterFormDTO;
import com.room6.student_tutor.models.dto.UserDTO;
import com.room6.student_tutor.services.UserServices;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/userservices")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class UserController {

    @Autowired
    public TutorRepository tutorRepository;

    @Autowired
    public StudentRepository studentRepository;
    @Autowired
    private UserServices userServices;
    @Autowired
    UserRepository userRepository;
    @Autowired
    AuthenticationController authenticationController;

    @PostMapping("signup")
    public ResponseEntity<String> newUserRegistration(@RequestBody User user) {
        if (userServices.userExistsByEmail(user.getEmail())) {
            return ResponseEntity.status(400).body("A user with this email already exists.");
        }
        if (userServices.userExistsByUsername(user.getUsername())) {
            return ResponseEntity.status(400).body("A user with this username already exists.");
        }
        userServices.registerUser(user);
        return null;
    }

    @PostMapping("/login")
    public ResponseEntity<String> userLogin(@RequestBody UserDTO userDTO,
                                            HttpServletResponse response, HttpSession session){
        return userServices.loginUser(userDTO.getUsername(), userDTO.getPassword()).map(user -> {
            session.setAttribute("username", user.getUsername());
            return ResponseEntity.ok("Login Successful");
        }).orElse(ResponseEntity.status(400).body("Invalid username or password, Please try again."));
    }

    @GetMapping("/getUser")
    public ResponseEntity<?> getCurrentUser(HttpSession session, HttpServletRequest request) {
        String username = (String) session.getAttribute("username");

        if (username == null) {
            return ResponseEntity.status(401).body("No user logged in");
        }

        User user = userRepository.findByUsername(username).orElse(null);
        if (user == null) {
            return ResponseEntity.status(404).body("User not found");
        }

        UserDTO userDTO = new UserDTO(user.getUsername(), user.getFirstName(),user.getLastName(),user.getEmail(),user.getRole(),user.getSubjects());

        return ResponseEntity.ok(userDTO);
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logoutUser(HttpServletRequest request, HttpServletResponse response) {
        Cookie[] cookies = request.getCookies();
        if(cookies != null){
            for(Cookie cookie : cookies){
                cookie.setAttribute("Max-Age", "0");
            }
        }
        HttpSession session = request.getSession(false);
        if(session != null){
            session.invalidate();
        }
        return ResponseEntity.ok("Logout successful");
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
