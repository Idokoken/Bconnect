package ndgroup.socialApp.service;

import ndgroup.socialApp.model.Post;
import ndgroup.socialApp.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public List<Post> getAllPost() {
        return postRepository.findAll();
    }
    public Post createPost(Post post) {
        return postRepository.save(post);
    }
}
