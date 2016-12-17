Rails.application.routes.draw do
  # get 'tasks/index'

  # get 'tasks/show'

  # get 'tasks/create'

  # get 'tasks/update'

  # get 'tasks/destroy'

  # # resources :robots

  # get 'robots/', to: 'robots#index'

  # get 'robots/:id', to: 'robots#show'

  # post 'robots/', to: 'robots#create'

  # put 'robots/:id', to: 'robots#update'

  # delete 'robots/:id', to: 'robots#destroy'

  resources :robots do
    resources :tasks
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
