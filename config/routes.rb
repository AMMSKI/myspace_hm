Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users do
      resources :posts
    end
  end


  get '/api/user/friends', to: 'api/users#friends'
  put '/api/user/friends', to: 'api/users#create_friend'
end
