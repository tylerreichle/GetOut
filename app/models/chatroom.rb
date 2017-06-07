class Chatroom < ApplicationRecord
  validates :users, :messages, presence: true
  
  has_many :users, through: :messages
  has_many :messages, dependent: :destroy
end
