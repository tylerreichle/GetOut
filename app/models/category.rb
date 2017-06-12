# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Category < ApplicationRecord
  validates :title, presence: true

  has_many :user_categories

  has_many :users,
    through: :user_categories,
    source: :user
end
