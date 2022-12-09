Rails.application.routes.draw do
  resources :categories, only: [:index, :show, :create, :update]
  resources :contents, only: [:index, :show, :create, :update, :destroy]
  resources :creators, only: [:index, :show, :create, :update]
  resources :profiles, only: [:index, :show, :create, :update]
  resources :users, only: [:index, :show, :create, :update]

  post "/signup", to: "users#create"
  get "/auth", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/cookie_click", to: "sessions#click"
end
