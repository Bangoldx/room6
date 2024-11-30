package com.room6.student_tutor.data;

import com.room6.student_tutor.models.Comment;
import com.room6.student_tutor.models.Forum;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Integer>  {
    List<Forum> findForumId(Comment comment);
}
