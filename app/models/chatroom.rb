# == Schema Information
#
# Table name: chatrooms
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_two_id :integer          not null
#

class Chatroom < ApplicationRecord
  validates :user_id, :user_two_id, presence: true
  validates :user_id, uniqueness: { scope: :user_two_id }

  has_many :messages, dependent: :destroy,
    primary_key: :id,
    foreign_key: :chatroom_id,
    class_name: :Message

  has_many :users, through: :messages
end
