# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  description     :text
#  img_url         :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, :first_name, :last_name, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }

  before_validation :ensure_session_token

  has_many :messages
  has_many :chatrooms, through: :messages
  has_many :user_categories

  has_many :categories,
    through: :user_categories,
    source: :category

  def self.find_by_credentials(signin, password)
    user = User.find_by(username: signin)
    user = User.find_by(email: signin) if user.nil?
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
