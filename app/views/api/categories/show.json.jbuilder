json.partial! '/api/categories/category', category: @category
json.users @category.users do |user|
  if current_user != user
    json.partial! 'api/users/user', user: user
  end
end
