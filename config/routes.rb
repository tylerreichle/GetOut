Rails.application.routes.draw do

  mount ActionCable.server => '/cable'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create]
    resource  :session, only: [:create, :destroy]
    resources :categories, only: [:index, :show]
    resources :chatrooms, except: [:new, :edit, :update]
    resources :messages, only: [:create, :destroy]

    get 'verify' => 'sessions#verify_session_token'
  end
end
