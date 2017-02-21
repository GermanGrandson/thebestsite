Rails.application.routes.draw do

root 'mysite#homepage'

post '/message', to: 'mysite#message'

end
