package ndgroup.socialApp.controller;

import ndgroup.socialApp.model.Post;
import ndgroup.socialApp.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
@CrossOrigin("*")
public class SocialController {
    @Autowired
    private PostService postService;


    @GetMapping
    public ResponseEntity<?> getAllPosts() {
        List<Post> posts = postService.getAllPost();
        return new ResponseEntity<List<Post>>(posts, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Post> createPosts(@RequestBody Post post) {
        Post newPost =  postService.createPost(post);
        return ResponseEntity.status(HttpStatus.CREATED).body(newPost);
    }
    @PutMapping("/likes/{id}/{like}")
    public ResponseEntity<?>updateLikes(@PathVariable Integer id, @PathVariable Integer like){
       Post post  = postService.updatePostLikes(id, like);
        return ResponseEntity.status(HttpStatus.CREATED).body(post);
    }
    @PutMapping("/unlikes/{id}/{unlike}")
    public ResponseEntity<?>updateUnLikes(@PathVariable Integer id, @PathVariable Integer unlike){
        Post post  = postService.updatePostUnLikes(id, unlike);
        return ResponseEntity.status(HttpStatus.CREATED).body(post);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delStudent(@PathVariable Integer id) {
        postService.deletePost(id);
        return ResponseEntity.noContent().build();
    }

}
