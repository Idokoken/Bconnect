package ndgroup.socialApp.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "posts")
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
@EqualsAndHashCode
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String user;
    private String content;
    private Integer likeCount;
    private Integer unLikeCount;
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "postId")
    List<Comment> comments = new ArrayList<>();

    public Post(String user, String content, Integer likeCount, Integer unLikeCount, List<Comment> comments) {
        this.user = user;
        this.content = content;
        this.likeCount = likeCount;
        this.unLikeCount = unLikeCount;
        this.comments = comments;
    }
}
