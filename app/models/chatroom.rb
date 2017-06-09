class Chatroom < ApplicationRecord
  validates :messages, :user_id, :user_two_id presence: true
  validates :user_id, uniqueness: { scope: :user_two_id }
  
  has_many :users, through: :messages
  has_many :messages, dependent: :destroy
end
