class MysiteController < ApplicationController

  # Render mobile or desktop depending on User-Agent for these actions.
  before_filter :check_for_mobile, :only => [:homepage]

def homepage

end

def message
  name = params[:name]
  email = params[:email]
  message = params[:message]
  SiteMailer.send_message(name, email, message).deliver
  render nothing: true
end


end
