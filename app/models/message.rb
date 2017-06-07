class Message < ApplicationRecord
  validates :body, :user, :chatroom, presence: true

  belongs_to :user
  belongs_to :chatroom
end