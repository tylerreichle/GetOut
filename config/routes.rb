Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
    resources :categories, only: [:index, :show]

    GET 'verify' => 'sessions#verify_access_token'
  end
end
