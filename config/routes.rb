Rails.application.routes.draw do
  namespace :api do
    resources :categories, only: [:index, :show]
  end
end
