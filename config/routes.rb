Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :user, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
    resources :categories, only: [:index, :show]
  end
end
