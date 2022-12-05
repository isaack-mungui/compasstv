Rails.application.routes.draw do
  resources :categories
  resources :contents
  resources :creators
  resources :profiles
  resources :users, only: [:index, :show, :create, :update]
end
