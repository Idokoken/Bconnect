package ndgroup.socialApp.service;

import jakarta.persistence.EntityNotFoundException;
import ndgroup.socialApp.model.Post;
import ndgroup.socialApp.repository.PostRepository;
import org.hibernate.FetchNotFoundException;
import org.springframework.beans.BeanUtils;
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

    public Post updatePostLikes(Integer id, Integer like){
        Post post = postRepository.findById(id).
                orElseThrow(() -> new FetchNotFoundException("post not found", id));
        post.setLikeCount(like + 1);

        return postRepository.save(post);
    }
    public Post updatePostUnLikes(Integer id, Integer unLike){
        Post post = postRepository.findById(id).
                orElseThrow(() -> new FetchNotFoundException("post not found", id));
        post.setUnLikeCount(unLike + 1);

        return postRepository.save(post);
    }

    public void deletePost(Integer id) {
        if (!postRepository.existsById(id)) {
            throw new EntityNotFoundException("Student not found with id: " + id);
        }
        postRepository.deleteById(id);
    }
}
