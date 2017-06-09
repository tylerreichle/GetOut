class Chatroom < ApplicationRecord
  validates :user_id, :user_two_id, presence: true
  validates :user_id, uniqueness: { scope: :user_two_id }
  
  has_many :messages, dependent: :destroy
  has_many :users, through: :messages
end
