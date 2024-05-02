package ndgroup.socialApp.service;

import ndgroup.socialApp.model.User;
import ndgroup.socialApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User createUser(User student) {
        return userRepository.save(student);
    }

    public List<User> getUsers()  {
        return userRepository.findAll();
    }



}

