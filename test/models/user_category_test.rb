# == Schema Information
#
# Table name: user_categories
#
#  id          :integer          not null, primary key
#  user_id     :integer
#  category_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class UserCategoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
