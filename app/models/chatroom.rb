class Chatroom < ApplicationRecord
  validates :users, :messages, presence: true
  
  has_many :users
  has_many :messages
end
