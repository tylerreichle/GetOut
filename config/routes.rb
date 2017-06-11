Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :categories, only: [:index, :show]

    get 'verify' => 'sessions#verify_session_token'
  end
end
