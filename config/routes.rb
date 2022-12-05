Rails.application.routes.draw do
  resources :categories, only: [:index, :show, :create, :update]
  resources :contents, only: [:index, :show, :create, :update, :destroy]
  resources :creators, only: [:index, :show, :create, :update]
  resources :profiles, only: [:index, :show, :create, :update]
  resources :users, only: [:index, :show, :create, :update]
end
