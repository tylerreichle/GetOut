class Category < ApplicationRecord
  validates :title, presence: true

  has_many :user_categories

  has_many :users,
    through: :user_categories,
    source: :user
end
