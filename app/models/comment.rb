class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :user


  def self.plus
    comments = Comment.all
    comments.map do |comment|
      {id: comment.id, text: comment.text, image: comment.image, user: comment.user, post: comment.post}
    end
  end

end
